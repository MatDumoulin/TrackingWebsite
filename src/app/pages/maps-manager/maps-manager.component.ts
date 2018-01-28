import { Component, NgZone, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

import { } from 'googlemaps';
import { MapsAPILoader, MouseEvent } from '@agm/core';

import { TrackeeService } from '../../data-services/trackee.service';
import { Trackee } from '../../models/trackee.model';

class Marker {
	long: string;
	lat: string;
	isTrackee: boolean;
	name: string;

	constructor(long:string, lat:string, isTrackee:boolean, name?:string) {
		this.long = long;
		this.lat = lat;
		this.isTrackee = isTrackee;
		this.name = name;
	}
}


@Component({
  selector: 'maps-manager',
  templateUrl: './maps-manager.component.html',
  styleUrls: ['./maps-manager.component.css']
})
export class MapsManagerComponent {
	markers: Marker[];
	destination = {
		latitude: null,
		longitude: null,
		zoom: 12,
		location: null,
		indexInMarkers: 0
	};
	searchControl: FormControl;
	autocomplete: any;
	private geocoder: any;

	@ViewChild("search")
	public searchElementRef: ElementRef;

	constructor(public trackeeService: TrackeeService,
				private mapsAPILoader: MapsAPILoader,
    			private ngZone: NgZone) { }

	ngOnInit() {
		//create search FormControl
    	this.searchControl = new FormControl();

    	//load Places Autocomplete
	    this.mapsAPILoader.load().then(() => {
	      this.autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
	        types: ["address"]
	      });
	      this.geocoder = new google.maps.Geocoder();
	      this.autocomplete.addListener("place_changed", () => {
	        this.ngZone.run(() => {
	          //get the place result
	          let place: google.maps.places.PlaceResult = this.autocomplete.getPlace();

	          //verify result
	          if (place.geometry === undefined || place.geometry === null) {
	            return;
	          }

	          //set latitude, longitude, address and zoom
	          this.destination.latitude = place.geometry.location.lat();
	          this.destination.longitude = place.geometry.location.lng();
	          this.destination.location = place.formatted_address;
	          this.destination.zoom = 12;

	          this.updateDestinationInMap();
	        });
	      });
	    });

	    // Subscribing to the trackee data service for changes
	    this.trackeeService.fetchTrackeesByRoom(4).subscribe( trackees => this.updateMarkerList(trackees));
	}

	// Not working
	onMarkerClick(infoWindow: any) {
		if(infoWindow) {
			if(infoWindow.isOpen) {
				infoWindow.close();
				infoWindow.isOpen = false;
			}
			else {
				infoWindow.open();
				infoWindow.isOpen = true; // Somehow, it is not updating automatically.
			}
		}
	}

	// Gets the letter equivalent for the number. 0 => A, 1 => B, ...
	getLetter(n: number) {
		return String.fromCharCode(65 + n);
	}

	updateDestination($event: MouseEvent) {
		this.destination.latitude = $event.coords.lat;
		this.destination.longitude = $event.coords.lng;

		const latlon = new google.maps.LatLng(this.destination.latitude, this.destination.longitude);
		let request = {
          latLng: latlon
        };   

        this.geocoder.geocode(request, (results, status) => {
        	this.ngZone.run(() => {
	          if (status == google.maps.GeocoderStatus.OK) {
	            if (results[0] != null) {
	               this.destination.location = results[0].formatted_address;
	            }
	          }

	          this.updateDestinationInMap();
	        });
        });
	}

	private updateMarkerList(trackees: Trackee[]) {
		this.markers = [];
		for(let trackee of trackees) {
			this.markers.push(new Marker( trackee.lon, trackee.lat, true, trackee.name));
		}
		this.destination.indexInMarkers = this.markers.length;
		this.markers.push(new Marker( this.destination.longitude, this.destination.latitude, false, this.destination.location));
	}

	private updateDestinationInMap() {
		this.searchControl.setValue(this.destination.location);
		this.markers[this.destination.indexInMarkers] = new Marker( this.destination.longitude, this.destination.latitude, false, this.destination.location);
	}

	private getMarkerIcon(marker: Marker) {
		return marker.isTrackee? "../assets/blue-dot.png" : null; 
	}
}

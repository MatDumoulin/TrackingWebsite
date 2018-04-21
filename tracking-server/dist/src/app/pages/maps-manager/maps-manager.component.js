"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var core_2 = require("@agm/core");
// Services
var store_service_1 = require("../../core/store/store.service");
var current_user_service_1 = require("../../data-services/current-user/current-user.service");
var trackee_service_1 = require("../../data-services/trackee/trackee.service");
var room_service_1 = require("../../data-services/room/room.service");
var Marker = (function () {
    function Marker(long, lat, isTrackee, name) {
        this.long = long;
        this.lat = lat;
        this.isTrackee = isTrackee;
        this.name = name;
    }
    return Marker;
}());
var MapsManagerComponent = (function () {
    function MapsManagerComponent(trackeeService, mapsAPILoader, ngZone, currentUserService, roomService, storeService) {
        this.trackeeService = trackeeService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.currentUserService = currentUserService;
        this.roomService = roomService;
        this.storeService = storeService;
        this.destination = {
            latitude: null,
            longitude: null,
            zoom: 12,
            location: null,
            indexInMarkers: 0
        };
        this.subscriptions = [];
    }
    MapsManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // create search FormControl
        this.searchControl = new forms_1.FormControl();
        // load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            _this.autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            _this.geocoder = new google.maps.Geocoder();
            _this.autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    // get the place result
                    var place = _this.autocomplete.getPlace();
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // set latitude, longitude, address and zoom
                    _this.destination.latitude = place.geometry.location.lat();
                    _this.destination.longitude = place.geometry.location.lng();
                    _this.destination.location = place.formatted_address;
                    _this.destination.zoom = 12;
                    _this.updateDestinationInMap();
                });
            });
        });
        this.subscriptions.push(this.storeService.roomSubject.subscribe(function (action) {
            console.log("Position changed:", action);
        }));
        // Subscribing to the trackee data service for changes
        // this.trackeeService.fetchTrackeesByRoom(4).subscribe(trackees => this.updateMarkerList(trackees));
    };
    MapsManagerComponent.prototype.ngOnDestroy = function () {
        this.roomService.deleteRoom(this.currentUserService.room.name);
        // Cleaning up streams.
        for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    // Not working
    MapsManagerComponent.prototype.onMarkerClick = function (infoWindow) {
        if (infoWindow) {
            if (infoWindow.isOpen) {
                infoWindow.close();
                infoWindow.isOpen = false;
            }
            else {
                infoWindow.open();
                infoWindow.isOpen = true; // Somehow, it is not updating automatically.
            }
        }
    };
    // Gets the letter equivalent for the number. 0 => A, 1 => B, ...
    MapsManagerComponent.prototype.getLetter = function (n) {
        return String.fromCharCode(65 + n);
    };
    MapsManagerComponent.prototype.updateDestination = function ($event) {
        var _this = this;
        this.destination.latitude = $event.coords.lat;
        this.destination.longitude = $event.coords.lng;
        var latlon = new google.maps.LatLng(this.destination.latitude, this.destination.longitude);
        var request = {
            latLng: latlon
        };
        this.geocoder.geocode(request, function (results, status) {
            _this.ngZone.run(function () {
                if (status === google.maps.GeocoderStatus.OK) {
                    if (results[0] != null) {
                        _this.destination.location = results[0].formatted_address;
                    }
                }
                _this.updateDestinationInMap();
            });
        });
    };
    MapsManagerComponent.prototype.updateMarkerList = function (trackees) {
        this.markers = [];
        for (var _i = 0, trackees_1 = trackees; _i < trackees_1.length; _i++) {
            var trackee = trackees_1[_i];
            this.markers.push(new Marker(trackee.lon, trackee.lat, true, trackee.name));
        }
        this.destination.indexInMarkers = this.markers.length;
        this.markers.push(new Marker(this.destination.longitude, this.destination.latitude, false, this.destination.location));
    };
    MapsManagerComponent.prototype.updateDestinationInMap = function () {
        this.searchControl.setValue(this.destination.location);
        this.markers[this.destination.indexInMarkers] = new Marker(this.destination.longitude, this.destination.latitude, false, this.destination.location);
    };
    MapsManagerComponent.prototype.getMarkerIcon = function (marker) {
        return marker.isTrackee ? "../assets/blue-dot.png" : null;
    };
    __decorate([
        core_1.ViewChild("search"),
        __metadata("design:type", core_1.ElementRef)
    ], MapsManagerComponent.prototype, "searchElementRef", void 0);
    MapsManagerComponent = __decorate([
        core_1.Component({
            selector: 'tm-maps-manager',
            templateUrl: './maps-manager.component.html',
            styleUrls: ['./maps-manager.component.css']
        }),
        __metadata("design:paramtypes", [trackee_service_1.TrackeeService,
            core_2.MapsAPILoader,
            core_1.NgZone,
            current_user_service_1.CurrentUserService,
            room_service_1.RoomService,
            store_service_1.StoreService])
    ], MapsManagerComponent);
    return MapsManagerComponent;
}());
exports.MapsManagerComponent = MapsManagerComponent;
//# sourceMappingURL=maps-manager.component.js.map
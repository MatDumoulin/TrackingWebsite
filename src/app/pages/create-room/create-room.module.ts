import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule,
         MatDialogModule,
         MatTooltipModule,
         MatInputModule
          } from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { CreateRoomComponent } from './create-room.component';
import { RoomService } from '../../data-services/room/room.service';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [CreateRoomComponent],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatInputModule,
    TextMaskModule
  ],
  providers: [RoomService],
  entryComponents: [CreateRoomComponent],
  exports: [CreateRoomComponent]
})
export class CreateRoomModule { }

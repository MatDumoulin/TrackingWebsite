import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule,
         MatDialogModule,
         MatTooltipModule,
         MatInputModule
          } from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { ClientCreateComponent } from './client-create.component';
import { RoomService } from '../../data-services/room.service';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [ClientCreateComponent],
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
  exports: [ClientCreateComponent]
})
export class ClientCreateModule { }
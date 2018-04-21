"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var angular2_text_mask_1 = require("angular2-text-mask");
var create_room_component_1 = require("./create-room.component");
var room_service_1 = require("../../data-services/room/room.service");
var core_module_1 = require("../../core/core.module");
var CreateRoomModule = (function () {
    function CreateRoomModule() {
    }
    CreateRoomModule = __decorate([
        core_1.NgModule({
            declarations: [create_room_component_1.CreateRoomComponent],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                core_module_1.CoreModule,
                material_1.MatButtonModule,
                material_1.MatDialogModule,
                material_1.MatTooltipModule,
                material_1.MatInputModule,
                angular2_text_mask_1.TextMaskModule
            ],
            providers: [room_service_1.RoomService],
            entryComponents: [create_room_component_1.CreateRoomComponent],
            exports: [create_room_component_1.CreateRoomComponent]
        })
    ], CreateRoomModule);
    return CreateRoomModule;
}());
exports.CreateRoomModule = CreateRoomModule;
//# sourceMappingURL=create-room.module.js.map
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
var alert_component_1 = require("./alert.component");
var AlertModule = (function () {
    function AlertModule() {
    }
    AlertModule = __decorate([
        core_1.NgModule({
            declarations: [alert_component_1.AlertComponent],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                material_1.MatButtonModule,
                material_1.MatDialogModule
            ],
            entryComponents: [alert_component_1.AlertComponent],
            exports: [alert_component_1.AlertComponent]
        })
    ], AlertModule);
    return AlertModule;
}());
exports.AlertModule = AlertModule;
//# sourceMappingURL=alert.module.js.map
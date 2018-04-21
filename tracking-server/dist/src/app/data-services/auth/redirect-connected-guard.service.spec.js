"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var redirect_connected_guard_service_1 = require("./redirect-connected-guard.service");
describe('RedirectConnectedGuardService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [redirect_connected_guard_service_1.RedirectConnectedGuardService]
        });
    });
    it('should be created', testing_1.inject([redirect_connected_guard_service_1.RedirectConnectedGuardService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=redirect-connected-guard.service.spec.js.map
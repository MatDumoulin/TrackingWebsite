"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var data_service_manager_service_1 = require("./data-service-manager.service");
describe('DataServiceManagerService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [data_service_manager_service_1.DataServiceManagerService]
        });
    });
    it('should be created', testing_1.inject([data_service_manager_service_1.DataServiceManagerService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=data-service-manager.service.spec.js.map
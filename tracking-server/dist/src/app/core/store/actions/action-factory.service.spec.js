"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var action_factory_service_1 = require("./action-factory.service");
describe('ActionFactoryService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [action_factory_service_1.ActionFactoryService]
        });
    });
    it('should be created', testing_1.inject([action_factory_service_1.ActionFactoryService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=action-factory.service.spec.js.map
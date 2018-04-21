"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var trackee_service_1 = require("./trackee.service");
describe('TrackeeService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [trackee_service_1.TrackeeService]
        });
    });
    it('should be created', testing_1.inject([trackee_service_1.TrackeeService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=trackee.service.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var room_service_1 = require("./room.service");
describe('RoomService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [room_service_1.RoomService]
        });
    });
    it('should be created', testing_1.inject([room_service_1.RoomService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=room.service.spec.js.map
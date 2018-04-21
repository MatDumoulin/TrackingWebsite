"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var crypto_service_1 = require("./crypto.service");
describe('CryptoService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [crypto_service_1.CryptoService]
        });
    });
    it('should be created', testing_1.inject([crypto_service_1.CryptoService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=crypto.service.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasicAction = (function () {
    function BasicAction(type, value) {
        this._type = type;
        this._value = value;
    }
    Object.defineProperty(BasicAction.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicAction.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return BasicAction;
}());
exports.BasicAction = BasicAction;
//# sourceMappingURL=basic-action.js.map
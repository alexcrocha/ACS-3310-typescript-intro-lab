"use strict";
// We need a Kaiju class
// All Kaiju have name, power and type.
// Kaiju should have a describe method that
// prints: name:<name> type:<type> power:<power>
Object.defineProperty(exports, "__esModule", { value: true });
exports.KaijuType = exports.Kaiju = void 0;
// Type can be: lizard, flying, or ape.
// Use an enum to define the type
// Be sure to include a constructor in the
// Kaiju class that initializes it's properties!
var KaijuType;
(function (KaijuType) {
    KaijuType[KaijuType["Lizard"] = 0] = "Lizard";
    KaijuType[KaijuType["Flying"] = 1] = "Flying";
    KaijuType[KaijuType["Ape"] = 2] = "Ape";
})(KaijuType || (exports.KaijuType = KaijuType = {}));
var Kaiju = /** @class */ (function () {
    function Kaiju(name, power, type) {
        this.name = name;
        this.power = power;
        this.type = type;
    }
    return Kaiju;
}());
exports.Kaiju = Kaiju;

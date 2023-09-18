"use strict";
// You are making a mapping application.
Object.defineProperty(exports, "__esModule", { value: true });
// Write an enum that defines the directions:
// North, South, East, West
// Use a string enum: https://www.typescriptlang.org/docs/handbook/enums.html#string-enums
var Direction;
(function (Direction) {
    Direction["North"] = "North";
    Direction["South"] = "South";
    Direction["East"] = "East";
    Direction["West"] = "West";
})(Direction || (Direction = {}));
// Should having a heading property type Direction
var MapPosition = /** @class */ (function () {
    function MapPosition(heading) {
        if (heading === void 0) { heading = Direction.North; }
        this.heading = heading;
    }
    // takes a new Direction as an argument
    MapPosition.prototype.move = function (newDirection) {
        // set the direction on your property
        this.heading = newDirection;
        // Print the new direction
        console.log("You are heading ".concat(this.heading));
    };
    // Should return a string and print:
    // "you are heading <direction>"
    MapPosition.prototype.describe = function () {
        return "You are heading ".concat(this.heading);
    };
    return MapPosition;
}());
var location = new MapPosition();
console.log(location.describe());
// Might output:
// "You are heading north"
location.move(Direction.South);
exports.default = MapPosition;

// Giant Robot class
// Goal create an interface with a methods
// All Robots have name, power and type.
// Giant Robot should have a describe method that
// prints: name:<name> type:<type> power:<power>
var GiantRobotType;
(function (GiantRobotType) {
    GiantRobotType["Gundam"] = "Gundam";
    GiantRobotType["Jaeger"] = "Jaeger";
    GiantRobotType["Evangelion"] = "Evangelion";
})(GiantRobotType || (GiantRobotType = {}));
var GiantRobot = /** @class */ (function () {
    function GiantRobot(name, power, type) {
        this.name = name;
        this.power = power;
        this.type = type;
    }
    GiantRobot.prototype.describe = function () {
        console.log("Name: ".concat(this.name, "\nPower: ").concat(this.power, "\tType: ").concat(this.type, "\n"));
    };
    return GiantRobot;
}());
var gundam = new GiantRobot('Exia', 100, GiantRobotType.Gundam);
var jaeger = new GiantRobot('Gipsy Danger', 90, GiantRobotType.Jaeger);
var eva = new GiantRobot('Unit-00', 120, GiantRobotType.Evangelion);
gundam.describe();
jaeger.describe();
eva.describe();

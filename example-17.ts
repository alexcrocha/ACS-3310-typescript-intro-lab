// Giant Robot class

// Goal create an interface with a methods

// All Robots have name, power and type.
// Giant Robot should have a describe method that
// prints: name:<name> type:<type> power:<power>

enum GiantRobotType {
  Gundam = "Gundam",
  Jaeger = "Jaeger",
  Evangelion = "Evangelion"
}

interface GiantRobotMethodsInterface {
  describe: () => void
}

class GiantRobot implements GiantRobotMethodsInterface {
  name: string
  power: number
  type: GiantRobotType

  constructor(name: string, power: number, type: GiantRobotType) {
    this.name = name
    this.power = power
    this.type = type
  }

  describe() {
    console.log(`Name: ${this.name}\nPower: ${this.power}\tType: ${this.type}\n`)
  }
}

const gundam = new GiantRobot('Exia', 100, GiantRobotType.Gundam)
const jaeger = new GiantRobot('Gipsy Danger', 90, GiantRobotType.Jaeger)
const eva = new GiantRobot('Unit-00', 120, GiantRobotType.Evangelion)

gundam.describe()
jaeger.describe()
eva.describe()

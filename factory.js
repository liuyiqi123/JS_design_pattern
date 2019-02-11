// 工厂模式

//构造函数
function Car(options) {
  this.doors = options.doors || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "silver";
}

function Truck(options) {
  this.wheelSize = options.wheelSize || "large";
  this.state = options.state || "used";
  this.color = options.color || "blue";
}

function VehicleFactory() {}
VehicleFactory.prototype.vehicleClass = Car;
VehicleFactory.prototype.createVehicle = function(options) {
  if (options.vehicleType === "car") {
    this.vehicleClass = Car;
  } else {
    this.vehicleClass = Truck;
  }
  return new this.vehicleClass(options);
};

var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
  vehicleType: "car",
  color: "yellow",
  doors: 6
});

console.log(car instanceof Car);
console.log(car);

var movingTruck = carFactory.createVehicle({
  vehicleType: "truck",
  state: "like new",
  color: "red",
  wheelSize: "small"
});

console.log(movingTruck instanceof Truck);
console.log(movingTruck);

function TruckFactory() {}
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;
var truckFactory = new TruckFactory();

var myBigTruck = truckFactory.createVehicle({
  state: "omg..so bad.",
  color: "pink",
  wheelSize: "so big"
});

console.log(myBigTruck instanceof Truck);
console.log(myBigTruck);

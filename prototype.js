//原型模式

var vehiclePrototype = {
  init: function(carModel) {
    this.model = carModel;
  },
  getModel: function(){
    console.log("The model of this vehicle is.." + this.model);
  }
};

function vehicle(model) {
  function F() {};
  F.prototype = vehiclePrototype;

  var f = new F();
  f.init(model);
  return f;
}

var car = vehicle("Ford Esort");
car.getModel();

var car1 = vehicle("Ford1");
car1.getModel();

console.log(car.__proto__===vehiclePrototype);

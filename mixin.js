// 混入模式

// 定义Car的构造函数
var Car = function(settings) {
  this.model = settings.model || "no model provided";
  this.color = settings.color || "no color provided";
}

// Mixin
var Mixin = function() {};
Mixin.prototype = {
  driveForward: function() {
    console.log("drive forward");
  },
  driveBackward: function() {
    console.log("drive backward");
  },
  driveSideways: function() {
    console.log("drive sideways");
  }
};

// 扩展方法
function augment(receivingClass, givingClass) {
  if (arguments[2]) {
    // 提供特定方法
    for (var i = 2, len = arguments.length; i < len; i++) {
      receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
    }
  } else {
    // 提供所有方法
    for (var methodName in givingClass.prototype) {
      if (!Object.hasOwnProperty(receivingClass.prototype, methodName)) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName];
      }
    }
  }
}

augment(Car, Mixin, "driveForward", "driveBackward");

var myCar = new Car({
  model: "Ford Escort",
  color: "blue"
});

myCar.driveForward();
myCar.driveBackward();

augment(Car, Mixin);

var mySportsCar = new Car({
  model: "Porsche",
  color: "red"
});

mySportsCar.driveSideways();

// 命令模式

var CarManager = (function() {
  return {
    requestInfo: function(model, id) {
      return "The information for " + model + " with ID" + id + "is foobar";
    },
    buyVehicle: function(model, id) {
      return "You have successfully purchased Item " + id + ", a " + model;
    },
    arrangeViewing: function(model, id) {
      return "You have successfully booked a viewing of " + model + "(" + id + ")";
    }
  };
})();

CarManager.excute = function(name) {
  return CarManager[name] && CarManager[name].apply(CarManager, [].slice.call(arguments, 1));
}

console.log(
  CarManager.excute("arrangeViewing", "Ferrari", "14523")
);
console.log(
  CarManager.excute("requestInfo", "Ford Mondeo", "54323")
);
console.log(
  CarManager.excute("requestInfo", "Ford Escort", "34232")
);
console.log(
  CarManager.excute("buyVehicle", "Ford Escort", "34232")
);

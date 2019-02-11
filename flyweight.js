// 享元模式

// 模拟纯虚拟继承 implement
Function.prototype.implementsFor = function(parentClassOrObject) {
  if (parentClassOrObject.constructor === Function) {
    this.prototype = new parentClassOrObject();
    this.prototype.constructor = this;
    this.prototype.parent = parentClassOrObject.prototype;
  } else {
    this.prototype = parentClassOrObject;
    this.prototype.constructor = this;
    this.prototype.parent = parentClassOrObject;
  }
  return this;
};

// 享元对象
var CoffeeOrder = {
  serveCoffee: function(context) {},
  getFlavor: function() {}
};

function CoffeeFlavor(newFlavor) {
  var flavor = newFlavor;
  if (typeof this.getFlavor === "function") {
  this.getFlavor = function() {
    return flavor;
  };
}

if (typeof this.serveCoffee === "function") {
  this.serveCoffee = function(context) {
    console.log("Serving Coffee flavor " +
      flavor +
      "to table number " +
      context.getTable());
  };
}
};

CoffeeFlavor.implementsFor(CoffeeOrder);

function CoffeeOrderContext(tableNumber){
  return {
    getTable: function(){
      return tableNumber;
    }
  }
};

function CoffeeFlavorFactory() {
  var flavors = [];
  return {
    getCoffeeFlavor: function (flavorName) {
      var flavor = flavors[flavorName];
      if (flavor === undefined) {
        flavor = new CoffeeFlavor(flavorName);
        flavors.push([flavorName,flavor]);
        flavors[flavorName] = flavor;
      }
      return flavor;
    },
    getTotalCoffeeFlavorsMade: function () {
      return flavors.length;
    }
  }
};

function testFlyweight() {
  var flavors = new CoffeeFlavor(),
  tables = new CoffeeOrderContext(),
  ordersMade = 0,
  flavorFactory;

  function takeOrders(flavorIn, table) {
    flavors[ordersMade] = flavorFactory.getCoffeeFlavor(flavorIn);
    tables[ordersMade++] = new CoffeeOrderContext(table);
  }

  flavorFactory = new CoffeeFlavorFactory();

  takeOrders("Cappuccino", 2);
  takeOrders("Cappuccino", 2);
  takeOrders("Frappe", 1);
  takeOrders("Frappe", 1);
  takeOrders("Xpresso", 1);
  takeOrders("Frappe", 897);

  for (var i = 0; i<ordersMade; ++i){
    flavors[i].serveCoffee(tables[i]);
  }
  console.log(" ");
  console.log("total CoffeeFlavor Objects made:" + flavorFactory.getTotalCoffeeFlavorsMade());
};

testFlyweight();

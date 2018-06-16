//构造器模式

//设置属性的4中方法

var newObject = {};
// 方法1 “点”
newObject.methord1 = "somekey1";
console.log(newObject.methord1);
// 方法2 “中括号”
newObject["methord2"] = "somekey2";
console.log(newObject.methord2);
// 方法3 “Object.defineProperty”
var defineProp = function(obj, key, value) {
  var config = {};
  config.value = value;
  Object.defineProperty(obj, key, config);
}
defineProp(newObject, "methord3", "somekey3");
console.log(newObject.methord3);
// 方法4 “Object.defineProperties” 批量
Object.defineProperties(newObject, {
  "methord4": {
    value: "somekey4",
    enumerable: true //可枚举才能打印显示
  },
  "methord41": {
    value: "somekey41" //打印时不显示
  }
});
console.log(newObject);

//基本构造器
function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;

  this.toString = function() {
    return this.model + " has done " + this.miles + "miles";
  }; //实力化后分别定义，未共享
}

var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

console.log(civic.toString());
console.log(mondeo.toString());

//带原型的构造器
function Car1(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;

  Car1.prototype.toString = function() {
    return this.model + " has done " + this.miles + "miles";
  }; //定义在属性上
}

var civic1 = new Car("Honda Civic1", 2008, 20000);
var mondeo1 = new Car("Ford Mondeo1", 2009, 5000);

console.log(civic1.toString());
console.log(mondeo1.toString());

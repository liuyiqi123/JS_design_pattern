//模块模式

//对象字面量

var myModule = {
  property: "someValue",
  config: {
    useCaching: true,
    language: "en"
  },
  //基本方法
  method: function() {
    console.log("Where are you?");
  },

  //输出当前配置信息
  method1: function() {
    console.log("Caching is:" + (this.config.useCaching ? "enabled" : "disabled"));
  },
  //重写配置
  method2: function(newConfig) {
    if (typeof newConfig === "object") {
      this.config = newConfig;
      this.method1();
    }
  }
};

myModule.method();
myModule.method1();
myModule.method2({
  language: "fr",
  useCaching: false
});

// 自包含
var testModule = (function() {
  var counter = 0; //private
  return {
    incrementCounter: function() {
      return ++counter;
    },
    resetCounter: function() {
      console.log("counter value prior to reset: " + counter);
      counter = 0;
    }
  };
})();

testModule.incrementCounter();
testModule.resetCounter(); //output: 1

// 引入混入
// var myModule=(function(JQ,_){
// ...})(JQuery,_);

// 引出
var myModule = (function() {
  var module = {},
    privateVariable = "hello world";

  function privateMethod() {
    console.log("I'm privateMethod");
  };

  module.publicVariable = "hi world";
  module.publicMethod = function() {
    console.log("Public:" + privateVariable);
    privateMethod();
  }
  return module;
})();

myModule.publicMethod();

// Revealing Module 揭示模块
var myrevealingModule = function() {
  var privateVar = "Hey private",
    publicVar = "Hey pubilic";

  function privateFn() {
    console.log("Name: " + privateVar);
  };

  function publicSetName(newName) {
    privateVar = newName;
  };

  function publicGetName() {
    privateFn();
  };
  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName
  };

}();

myrevealingModule.getName(); // Hey private;
myrevealingModule.setName("Hey Changed");
myrevealingModule.getName(); // Hey Changed;

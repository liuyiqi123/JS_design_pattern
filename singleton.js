//单例模式
var mySingleton = (function() {
  var instance;

  function init() {
    var privateVar = "I'm private",
      privateRandomNum = Math.random();

    function privateMethod() {
      console.log("I am private method");
    }
    return {
      pubilicMethod: function() {
        console.log("I am public method");
      },
      publicVar: "I'm public",
      getRandom: function() {
        return privateRandomNum;
      }
    };
  };
  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();

var singleA=mySingleton.getInstance();
var singleB=mySingleton.getInstance();
console.log(singleA.getRandom()===singleB.getRandom());

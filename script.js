function builFunction() {
  var arr = [];

  for (let index = 0; index < 3; index++) {
    arr.push(function () {
      console.log(index);
    });
  }
  return arr;
}
var fs = builFunction();

fs[0]();
fs[1]();
fs[2]();



// 
function builFunction() {
  var arr = [];

  for (var index = 0; index < 3; index++) {
    arr.push(
      (function (index) {
        return function () {
          console.log(index);
        };
      })(index)
    );
  }
  return arr;
}
var fs = builFunction();

fs[0]();
fs[1]();
fs[2]();

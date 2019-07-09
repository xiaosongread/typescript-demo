// let x = 3
// x = '123' // 不能将类型“"123"”分配给类型“number”

window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button);   //<- OK
  // console.log(mouseEvent.kangaroo); //<- Error!
};
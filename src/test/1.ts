// let a: number;
// a = true

// let input = [1, 2];
// let [first, second] = input;
// [first, second] = [second, first]
// console.log(first, second) // 2,1

// let input = [1, 1];
// let [first, second] = input
// function f(first: number, second: string) {
//   console.log(first);
//   console.log(second);
// }
// f(first, second);



// 接口
// function printlabel(labeled: {label: string}) {
//   console.log(labeled.label)
// }
// let labeled = {
//   label: '检查属性类型'
//   // label: 12 //不能将类型“number”分配给类型“string”
// }
// printlabel(labeled)

// 类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。
// interface labeledvalue {
//   label: number;
// }
// function printlabel(labelobj: labeledvalue) {
//   console.log(labelobj.label)
// }
// let myobject = {
//   label: 123
// }
// printlabel(myobject)

// 可选属性
// interface SquareConfig {
//   color?: string;
//   width?: number;
// }
// function createSquare(config: SquareConfig): {color: string; area: number} {
//   let newSquare = {color: "white", area: 100};
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }
// let mySquare = createSquare({width: 12, color: "black"});
// console.log(mySquare) // { color: 'black', area: 100 }

// 只读属性
// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用const，若做为属性则使用readonly。
// interface point{
//   readonly a: number,
//   readonly b: number
// } 
// let point1:point = {
//   a: 1,
//   b: 2
// }
// point1.a = 12 // Cannot assign to 'a' because it is a read-only propert
// console.log(point1.a)

// const a = 123
// a = 234 // Cannot assign to 'a' because it is a constant

//额外的属性检查
// 函数类型
// 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
// interface Searchfn {
//   (source: string, subString: string): boolean
// }
// let mySearch: Searchfn
// mySearch = function (source: string, subString: string) {
//   let result = source.search(subString);
//   return result > -1;
// }
// let result = mySearch('acs','s')
// // let result = mySearch('acs',1) // 类型“1”的参数不能赋给类型“string”的参数
// console.log(result) // true

// 可索引的类型
// Typescript支持两种索引签名：字符串和数字
// interface stringArr {
//   [index: number]: string
// }
// let arr: stringArr
// arr = ['bob','aoa']
// let one = arr[0]
// // let two = arr['1']
// console.log(one)
// // console.log(two)

class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}
interface NotOkay {
  [x: number]: Animal; // 数字索引类型“Animal”不能赋给字符串索引类型“Dog”。
  [x: string]: Dog;
}



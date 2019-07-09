// Symbols是不可改变且唯一的
// let sym2 = Symbol("key");
// let sym3 = Symbol("key");
// console.log(sym2 === sym3) // false

// > 像字符串一样，symbols也可以被用做对象属性的键。

// const sym = Symbol();
// let obj = {
//     [sym]: "value"
// };
// console.log(obj[sym]); // "value"


// const getClassNameSymbol = Symbol();
// class C {
//     [getClassNameSymbol](){
//        return "C";
//     }
// }
// let c = new C();
// let className = c[getClassNameSymbol](); // "C"
// console.log(className)
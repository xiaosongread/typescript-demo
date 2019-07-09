// ## 可迭代性
// > 当一个对象实现了Symbol.iterator属性时，我们认为它是可迭代的。 

// 一些内置的类型如Array，Map，Set，String，Int32Array，Uint32Array等都已经实现了各自的Symbol.iterator。 对象上的Symbol.iterator函数负责返回供迭代的值。

// let someArray = [1, "string", false];
// for(let attr of someArray) {
//   console.log(attr) // 1 string false
// }

// for..of和for..in均可迭代一个列表；但是用于迭代的值却不同，for..in迭代的是对象的 键 的列表，而for..of则迭代对象的键对应的值

// let list = [4, 5, 6];
// for (let i in list) {
//     console.log(i); // "0", "1", "2",
// }
// for (let i of list) {
//     console.log(i); // "4", "5", "6"
// }

let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
for (let pet in pets) {
    console.log(pet); // "species"
}
for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}



// > 我们需要一种方法使返回值的类型与传入参数的类型是相同的。 这里，我们使用了类型变量，它是一种特殊的变量，只用于表示类型而不是值

function identity<T>(arg: T): T {
  return arg;
}
// 我们给identity添加了类型变量T。 T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。 之后我们再次使用了T当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了。 这允许我们跟踪函数里使用的类型的信息。
// 我们把这个版本的identity函数叫做泛型，因为它可以适用于多个类型。

// 我们定义了泛型函数后，可以用两种方法使用。

// let output = identity<string>("myString"); 
// // output = 123 // 不能将类型“123”分配给类型“string”
// console.log(output) // myString

// 第二种方法更普遍。利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型：
// let output = identity("myString");  // type of output will be 'string'

// ### 使用泛型变量
// 现在假设我们想操作T类型的数组而不直接是T。由于我们操作的是数组，所以.length属性是应该存在的。 我们可以像创建其它数组一样创建这个数组：
// function loggingIdentity<T>(arg:T[]):T[] {
//   console.log(arg.length)
//   return arg
// }
// function loggingIdentity<T>(arg: Array<T>): Array<T> {
//   console.log(arg.length);  // Array has a .length, so no more error
//   return arg;
// }
// let arr = loggingIdentity(['1','2'])
// let str = loggingIdentity('str') // 类型“"str"”的参数不能赋给类型“unknown[]”的参数。ts(2345)
// console.log(arr)


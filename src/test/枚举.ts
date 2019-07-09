// 使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript支持数字的和基于字符串的枚举

// ## 数字枚举

// enum person {
//   Name = 1,
//   Age,
//   Sex
// }
// console.log(person.Name, person.Age, person.Sex) // 1 2 3

// enum person {
//   Name,
//   Age,
//   Sex
// }
// console.log(person.Name, person.Age, person.Sex) // 0 1 2

// enum Response1 {
//   No = 0,
//   Yes = 1,
// }

// function respond(recipient: string, message: Response1): void {
//   // ...
//   console.log(recipient, message) // Princess Caroline 1
// }

// respond("Princess Caroline", Response1.Yes)

// enum E {
//   A = getSomeValue(),
//   B // 枚举成员必须具有初始化表达式
// }


// 字符窜枚举
// enum Desction {
//   Up = 'up',
//   Down = 'down',
//   Left = 'left',
//   Right = 'right'
// }
// console.log(Desction.Down, Desction.Left) // down left

// ## 计算的和常量成员
// enum E { X }
// console.log(E.X) // 0
// enum E1 { X, Y, Z }
// enum E2 {
//     A = 1, B, C
// }
// console.log(E1.X, E1.Y, E1.Z) // 0 1 2
// console.log(E2.A, E2.B, E2.C) // 1 2 3

// 枚举成员使用常量枚举表达式初始化。 常量枚举表达式是TypeScript表达式的子集，它可以在编译阶段求值。 当一个表达式满足下面条件之一时，它就是一个常量枚举表达式：

// 一个枚举表达式字面量（主要是字符串字面量或数字字面量）
// 一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）
// 带括号的常量枚举表达式
// 一元运算符+, -, ~其中之一应用在了常量枚举表达式
// 常量枚举表达式做为二元运算符+, -, *, /, %, <<, >>, >>>, &, |, ^的操作对象。
// 若常量枚举表达式求值后为NaN或Infinity，则会在编译阶段报错。

// enum FileAccess {
//   // constant members
//   None,
//   Read    = 1 << 1,
//   Write   = 1 << 2,
//   ReadWrite  = Read | Write,
//   // computed member
//   G = "123".length
// }
// console.log(
//   FileAccess.None, // 0
//   FileAccess.Read, // 2
//   FileAccess.Write, // 4
//   FileAccess.ReadWrite, // 6
//   FileAccess.G // 3
// )

// ## 联合枚举与枚举成员的类型
// enum ShapeKind {
//   Circle,
//   Square,
// }

// interface Circle {
//   kind: ShapeKind.Circle;
//   radius: number;
// }

// interface Square {
//   kind: ShapeKind.Square;
//   sideLength: number;
// }

// let c: Circle = {
//   // kind: ShapeKind.Square, // 不能将类型“ShapeKind.Square”分配给类型“ShapeKind.Circle”
//   kind: ShapeKind.Circle,
//   //    ~~~~~~~~~~~~~~~~ Error!
//   radius: 100,
// }
// console.log(c.kind, c) // 0 { kind: 0, radius: 100 }

// enum E {
//   Foo,
//   Bar,
// }
// console.log(E, E.Foo, E.Bar, E[0], E[1]) // { '0': 'Foo', '1': 'Bar', Foo: 0, Bar: 1 } 0 1 'Foo' 'Bar'
// function f(x: E) {
//   console.log(x, E) // 1 { '0': 'Foo', '1': 'Bar', Foo: 0, Bar: 1 }
//   if (x !== E.Foo || x !== E.Bar) {
//       //             ~~~~~~~~~~~
//       // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
        // x !== E.Foo 就是恒等于true,x !== E.Bar就是多余的判断
//   }
// }
// f(1)

// ## 运行时的枚举
// enum E {
//   X, Y, Z
// }
// function f(obj: { X: number }) {
//   return obj.X;
// }

// let test = f(E);
// console.log(test) // 0

// ## 反向映射
let objval = {
  name: 'zhangsan',
  age: 12,
  sex: 'man'
}
enum Person {
  obj = objval
}







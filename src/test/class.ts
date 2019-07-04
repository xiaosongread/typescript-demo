// 类
// class Person {
//   name: string;
//   constructor(optionsName: string) {
//     this.name = optionsName
//   }
//   say() {
//     console.log(this.name)
//   }
// }
// let student = new Person('小张')
// student.say()

// class Person {
//   name: string;
//   constructor(optionsName: string) {
//     this.name = optionsName
//   }
//   say() {
//     console.log(this.name)
//   }
// }
// class Student extends Person {
//   childen: string = this.name
//   call() {
//     console.log(this.name, this.childen)
//   }
// }
// let student = new Student('小张')
// student.say()
// student.call()

// class Animal {
//   name: string;
//   constructor(theName: string) { this.name = theName; }
//   move(distanceInMeters: number = 0) {
//       console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }

// class Snake extends Animal {
//   constructor(name: string) { super(name); }
//   move(distanceInMeters = 5) {
//       console.log("Slithering...");
//       super.move(distanceInMeters);
//   }
// }

// class Horse extends Animal {
//   constructor(name: string) { super(name); }
//   move(distanceInMeters = 45) {
//       console.log("Galloping...");
//       super.move(distanceInMeters);
//   }
// }

// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");

// sam.move();
// tom.move(34);
// // 这个例子演示了如何在子类里可以重写父类的方法。 Snake类和Horse类都创建了move方法，它们重写了从Animal继承来的move方法，使得move方法根据不同的类而具有不同的功能。 注意，即使tom被声明为Animal类型，但因为它的值是Horse，调用tom.move(34)时，它会调用Horse里重写的方法：
// // Slithering...
// // Sammy the Python moved 5m.
// // Galloping...
// // Tommy the Palomino moved 34m.

// 公共、私有、受保护
// 当成员被标记成private时，它就不能在声明它的类的外部访问
// class Person {
//   private name: string
//   constructor(val: string) {
//     this.name = val
//   }
// }
// let stu = new Person('张')
// console.log(stu.name) // 属性“name”为私有属性，只能在类“Person”中访问
// protected成员在派生类中仍然可以访问
// class Person {
//   protected name: string;
//   constructor (val: string) {
//     this.name = val
//   }
// }
// class Student extends Person {
//   private age: number;
//   constructor (nameval: string, ageval: number) {
//     super(nameval);
//     this.age = ageval
//   }
//   public getName() {
//     return `我的名字叫${this.name}，今年年龄${this.age}`
//   }
// }
// let stu1 = new Student('小张', 12)
// let str = stu1.getName()
// console.log(str) // 我的名字叫小张，今年年龄12
// // console.log(stu1.name) // 属性“name”受保护，只能在类“Person”及其子类中访问
// // console.log(stu1.age) // 属性“age”为私有属性，只能在类“Student”中访问

// 构造函数也可以被标记成protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。比如，
// class Person {
//   protected name: string;
//   protected constructor(theName: string) { this.name = theName; }
// }

// // Employee 能够继承 Person
// class Employee extends Person {
//   private department: string;

//   constructor(name: string, department: string) {
//       super(name);
//       this.department = department;
//   }

//   public getElevatorPitch() {
//       return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//   }
// }

// let howard = new Employee("Howard", "Sales");
// let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.类“Person”的构造函数是受保护的，仅可在类声明中访问

// readonly
// 你可以使用readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
// class Octopus {
//   readonly name: string;
//   readonly numberOfLegs: number = 8;
//   constructor (theName: string) {
//       this.name = theName;
//   }
//   getName() {
//     console.log(this.name)
//     return this.name
//   }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// let name1 = dad.getName() // Man with the 8 strong legs
// console.log(name1) // Man with the 8 strong legs
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.

// 参数属性
// class Person {
//   constructor(private name: string){}
//   todo(number: number) {
//     return `${this.name}打到了${number}`
//   }
// }
// let stu1 = new Person('小张')
// console.log(stu1.todo(3))
// console.log(stu1.name) // errrpr 属性“name”为私有属性，只能在类“Person”中访问

// 注意看我们是如何舍弃了theName，仅在构造函数里使用private name: string参数来创建和初始化name成员。 我们把声明和赋值合并至一处。

//参数属性通过给构造函数参数添加一个访问限定符来声明。 使用private限定一个参数属性会声明并初始化一个私有成员；对于public和protected来说也是一样。



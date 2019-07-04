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




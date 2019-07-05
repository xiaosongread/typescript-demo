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
// class Animal {
//   constructor(private name: string) { }
//   move(distanceInMeters: number) {
//       console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }
// 注意看我们是如何舍弃了theName，仅在构造函数里使用private name: string参数来创建和初始化name成员。 我们把声明和赋值合并至一处。
//参数属性通过给构造函数参数添加一个访问限定符来声明。 使用private限定一个参数属性会声明并初始化一个私有成员；对于public和protected来说也是一样。
// 存取器
// let passcode = "secret passcode";
// class Employee {
//     private _fullName: string;
//     get fullName(): string {
//         return this._fullName;
//     }
//     set fullName(newName: string) {
//         if (passcode && passcode == "secret passcode") {
//             this._fullName = newName;
//         }
//         else {
//             console.log("Error: Unauthorized update of employee!");
//         }
//     }
// }
// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     console.log(employee.fullName); // Bob Smith
// }
// 静态属性
// class Area {
//   static origin = {width: 0, height: 0};
//   getArea(data: {width: number, height: number}) {
//     let newWidth = data.width - Area.origin.width;
//     let newHeight = data.height - Area.origin.height;
//     return newWidth * newHeight
//   } 
// }
// let area1 = new Area()
// let areaNum = area1.getArea({
//   width: 5,
//   height: 4
// })
// console.log(areaNum) // 20
//!!: 那些仅当类被实例化的时候才会被初始化的属性。 我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上
//那些仅当类被实例化的时候才会被初始化的属性。 我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。 在这个例子里，我们使用static定义origin，因为它是所有网格都会用到的属性。 每个实例想要访问这个属性的时候，都要在origin前面加上类名。 如同在实例属性上使用this.前缀来访问属性一样，这里我们使用Area.来访问静态属性
// 抽象类
// abstract class Department {
//   constructor(public name: string) {
//   }
//   printName(): void {
//       console.log('Department name: ' + this.name);
//   }
//   abstract printMeeting(): void; // 必须在派生类中实现
// }
// class AccountingDepartment extends Department {
//   constructor() {
//       super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
//   }
//   printMeeting(): void {
//       console.log('The Accounting Department meets each Monday at 10am.');
//   }
//   generateReports(): void {
//       console.log('Generating accounting reports...');
//   }
// }
// let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
// department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
// department.printName();
// department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在
// 高级技巧
// 构造函数
// class Greeter {
//   greeting: string;
//   constructor(message: string) {
//       this.greeting = message;
//   }
//   greet() {
//       return "Hello, " + this.greeting;
//   }
// }
// let greeter: Greeter;
// greeter = new Greeter("world");
// console.log(greeter.greet());
// :以上代码编译成js(tsc class.ts)如下：
// var Greeter = /** @class */ (function () {
//   function Greeter(message) {
//       this.greeting = message;
//   }
//   Greeter.prototype.greet = function () {
//       return "Hello, " + this.greeting;
//   };
//   return Greeter;
// }());
// var greeter;
// greeter = new Greeter("world");
// console.log(greeter.greet());
// class Greeter {
//   static standardGreeting = "Hello, there";
//   greeting: string;
//   greet() {
//       if (this.greeting) {
//           return "Hello, " + this.greeting;
//       }
//       else {
//           return Greeter.standardGreeting;
//       }
//   }
// }
// let greeter1: Greeter;
// greeter1 = new Greeter();
// console.log(greeter1.greet()); // Hello, there
// let greeterMaker: typeof Greeter = Greeter;
// greeterMaker.standardGreeting = "Hey there!";
// let greeter2: Greeter = new greeterMaker();
// console.log(greeter2.greet()); // Hey there!
// greeter1与之前看到的一样。 我们实例化Greeter类，并使用这个对象。 与我们之前看到的一样。
//再之后，我们直接使用类。 我们创建了一个叫做greeterMaker的变量。 这个变量保存了这个类或者说保存了类构造函数。 然后我们使用typeof Greeter，意思是取Greeter类的类型，而不是实例的类型。 或者更确切的说，"告诉我Greeter标识符的类型"，也就是构造函数的类型。 这个类型包含了类的所有静态成员和构造函数。 之后，就和前面一样，我们在greeterMaker上使用new，创建Greeter的实例。
// 把类当做接口使用
// 类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };

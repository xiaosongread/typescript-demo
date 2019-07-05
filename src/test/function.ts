// 函数类型
// let myAdd: (x:number, y:number) => number =
//     function(x: number, y: number): number { return x + y; };

// let myAdd: (baseValue: number, increment: number) => number =
//     function(x: number, y: number): number { return x + y; };

// 只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确。

// 第二部分是返回值类型。 对于返回值，我们在函数和返回值类型之前使用(=>)符号，使之清晰明了。 如之前提到的，返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为void而不能留空。

// 函数的类型只是由参数类型和返回值组成的。 函数中使用的捕获变量不会体现在类型里。 实际上，这些变量是函数的隐藏状态并不是组成API的一部分。

// 推断类型
// myAdd has the full function type
// let myAdd = function(x: number, y: number): number { return x + y; };

// // The parameters `x` and `y` have the type number
// let myAdd: (baseValue: number, increment: number) => number =
//     function(x, y) { return x + y; };
// 你会注意到，就算仅在等式的一侧带有类型，TypeScript编译器仍可正确识别类型
// 这叫做“按上下文归类”，是类型推论的一种。 它帮助我们更好地为程序指定类型。

// 可选参数和默认参数
// JavaScript里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是undefined。 在TypeScript里我们可以在参数名旁使用?实现可选参数的功能

// function fullName (firstname: string, lastname?: string) {
//   console.log(`我姓:${firstname}，名:${lastname}`) 
// }
// fullName('song') // 我姓:song，名:undefined

// 在TypeScript里，我们也可以为参数提供一个默认值当用户没有传递这个参数或传递的值是undefined时。 它们叫做有默认初始化值的参数。 让我们修改上例，把last name的默认值设置为"Smith"
// function buildName(firstName: string, lastName = "Smith") {
//   return firstName + " " + lastName;
// }

// let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
// let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
// let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result4 = buildName("Bob", "Adams");         // ah, just right

// > 在所有必须参数后面的带默认初始化的参数都是可选的，与可选参数一样，在调用函数的时候可以省略。 也就是说可选参数与末尾的默认参数共享参数类型。


// 剩余参数
// function buildName(firstName: string, ...restOfName: string[]) {
//   return firstName + " " + restOfName.join(" ");
// }

// let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
// console.log(employeeName) // Joseph Samuel Lucas MacKinzie

// > 使用ECMAScript 6箭头语法。 箭头函数能保存函数创建时的this值，而不是调用时的值

// let deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   createCardPicker: function() {
//       // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
//       return () => {
//           let pickedCard = Math.floor(Math.random() * 52);
//           let pickedSuit = Math.floor(pickedCard / 13);

//           return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//       }
//   }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);





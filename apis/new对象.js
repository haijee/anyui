// 关于 new 的原理，主要分为以下几步：

// 创建一个空对象 。
// 由 this 变量引用该对象 。
// 该对象继承该函数的原型(更改原型链的指向) 。
// 把属性和方法加入到 this 引用的对象中。
// 新创建的对象由 this 引用 ，最后隐式地返回 this

// 构造器函数
let Parent = function (name, age) {
  this.name = name;
  this.age = age;
};
Parent.prototype.sayName = function () {
  console.log(this.name);
};

//自己定义的new方法
let newMethod = function (Parent, ...rest) {
  // 1.以构造器的prototype属性为原型，创建新对象；
  let child = Object.create(Parent.prototype);
  // 2.将this和调用参数传给构造器执行
  let result = Parent.apply(child, rest);
  // 3.如果构造器没有手动返回对象，则返回第一步的对象
  console.log(result,child)
  return typeof result === "object" ? result : child;
};
//创建实例，将构造函数Parent与形参作为参数传入
const child = newMethod(Parent, "echo", 26);
child.sayName(); //'echo';
//最后检验，与使用new的效果相同
console.log(child instanceof Parent); //true
console.log(child.hasOwnProperty("name")); //true
console.log(child.hasOwnProperty("age")); //true
console.log(child.hasOwnProperty("sayName")); //false

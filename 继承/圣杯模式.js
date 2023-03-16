// target 是子类，origin 是基类
// target ---> Student, origin ---> Person
function inherit(target, origin) {
    function F() { }; // 没有任何多余的属性

    // origin.prototype === Person.prototype, origin.prototype.constructor === Person 构造函数
    F.prototype = origin.prototype;

    // 假设 new F() 出来的对象叫小 f
    // 那么这个 f 的原型对象 === F.prototype === Person.prototype
    // 那么 f.constructor === Person.prototype.constructor === Person 的构造函数
    target.prototype = new F();

    // 而 f 这个对象又是 target 对象的原型对象
    // 这意味着 target.prototype.constructor === f.constructor
    // 所以 target 的 constructor 会指向 Person 构造函数

    // 我们要让子类的 constructor 重新指向自己
    // 若不修改则会发现 constructor 指向的是父类的构造函数
    target.prototype.constructor = target;
}


// 基类
var Person = function (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.test = "this is a test";
Person.prototype.testFunc = function () {
    console.log('this is a testFunc');
}


// 子类
var Student = function (name, age, gender, score) {
    Person.apply(this, [name, age]);
    this.gender = gender;
    this.score = score;
}
inherit(Student, Person); // 使用圣杯模式实现继承
// 在子类上面添加方法
Student.prototype.testStuFunc = function () {
    console.log('this is a testStuFunc');
}

// 测试
var zhangsan = new Student("张三", 18, "男", 100);

console.log(zhangsan.name); // 张三
console.log(zhangsan.age); // 18
console.log(zhangsan.gender); // 男
console.log(zhangsan.score); // 100
console.log(zhangsan.test); // this is a test
zhangsan.testFunc(); // this is a testFunc
zhangsan.testStuFunc(); // this is a testStuFunc

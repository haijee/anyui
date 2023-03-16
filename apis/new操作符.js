
function objectFactory() {
    let newObject = null;
    let constructor = Array.prototype.shift.call(arguments);

    console.log(arguments, constructor.prototype,Array.prototype.shift)

    let result = null;
    // 判断参数是否是一个函数
    if (typeof constructor !== "function") {
      console.error("type error");
      return;
    }
    // 新建一个空对象，对象的原型为构造函数的 prototype 对象
    newObject = Object.create(constructor.prototype);
    // 将 this 指向新建对象，并执行函数
    result = constructor.apply(newObject, arguments);
    // 判断返回对象
    let flag = result && (typeof result === "object" || typeof result === "function");
    // 判断返回结果
    return flag ? result : newObject;
  }
  // 使用方法 objectFactory(构造函数, 初始化参数)

//   objectFactory(构造函数, 初始化参数);

function fn(){}

objectFactory(fn,1)


// 简化版

function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ ...params) {
  // 创建一个空对象，继承构造函数的 prototype 属性
  let context = Object.create(constructor.prototype);
  // 执行构造函数
  let result = constructor.apply(context, params);
  // 如果返回结果是对象，就直接返回，否则返回 context 对象
  return typeof result === 'object' && result != null ? result : context;
}

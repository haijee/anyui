
// defineProperties
const obj = {
  username: "admin",
  password: "123456",
  id: "0001",
};
for (let key in obj) {
  Object.defineProperties(obj, {
    // 对象里面默认把key当作字符串，通过[]语法实现将其当作变量
    ["_" + key]: {
      value: obj[key],
      writable: true,
    },
    [key]: {
      get() {
        // 如果returnobj[key],每次return都会访问，
        // 然后触发get方法会形成死循环
        return obj["_" + key];
      },
      set(val) {
        obj["_" + key] = val;
      },
    },
  });
}

// Proxy
const obj1 = {
  name: "zhangsan",
  age: 18,
};
const res = new Proxy(obj1, {
  get(target, property) {
    return target[property];
  },
  set(target, property, val) {
    target[property] = val;
  },
});
res.age = 20;
console.log(res.age);
console.log(res.name);
// 数据代理后添加的数据也可以被代理
res.abc = 123;
console.log(res);

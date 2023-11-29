


const add = function (x, y, z) {
  return x + y + z;
};


const curry = function (fn) {
  return function curried(...args) {
    //这里不能用箭头函数
    if (fn.length === args.length) {
      return fn.apply(this, args);
    } else {
      return function (...args1) {
        return curried.apply(this, args.concat(args1));
      };
    }
  };
};

// 简化版

const curry1 = function (fn) {
  return function curried(...args) {
    return fn.length === args.length ? fn.apply(this, args) : curried.bind(this, ...args);
  };
};


const curry_add = curry(add);
const next = curry_add(111);
const next1 = next(6);
const next2 = next1(10);
console.log(next2);

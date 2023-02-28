const add = function (x, y, z) {
    return x + y + z;
  };
  
  const curry = function (fn) {
    return function curried(...args) {
      console.log(fn.length, args.length);
      // 这里不能用箭头函数，参数够了就执行
      if (fn.length === args.length) {
        return fn.apply(this, args);
      } else {
        // 否则返回函数，等待参数满足再执行
        return function (...args1) {
          return curried.apply(this, args.concat(args1));
        };
      }
    };
  };
  
  const curry_add = curry(add);
  const next = curry_add(111);
  const next1 = next(6);
  const next2 = next1(10);
  console.log(next2);
  
  


const add = x => x + 10;
const multiply = x => x * 10;

const pipe = function () {
  const args = [].slice.apply(arguments);
  return function (x) {
    return args.reduce((res, cb) => cb(res), x);
  };
};

// 参数顺序改为从左往右
let calculate = pipe(add, multiply);
let res = calculate(10);
console.log(res); // 结果还是200


// ES6写法：

const pipeEs6 = (...args) => x => args.reduce((res, cb) => cb(res), x)
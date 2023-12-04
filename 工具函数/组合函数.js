

// 参考文档：
// https://www.cnblogs.com/qianxiaox/p/13679185.html
// https://blog.51cto.com/u_15283585/2959721

// 组合函数 一般是从右向左的顺序

const add = x => x + 10;
const multiply = x => x * 10;

const compose1 = function(){
  // 将接收的参数存到一个数组， args == [multiply, add]
  const args = [].slice.apply(arguments);
  return function(x) {
    return args.reduceRight((res, cb) => cb(res), x);
  }
}

// 异步
const compose2 = function (...args) {
  let init = args.pop();
  return function (...arg) {
    return args.reverse().reduce(function (sequence, func) {
      return sequence.then(function (result) {
        return func.call(null, result);
      });
    }, Promise.resolve(init.apply(null, arg)));
  };
};


// 简介版
function compose3(...fns) {
  return fns.reduce((f, g) => (...args) => {
    return f(g(...args));
  });
}

// 验证
let calculate = compose(multiply, add);
let res = calculate(10);
console.log(res);    // 结果 200





const compose = (...fns) => (...args) => fns.reduceRight((params, fn) => [fn.apply(null, [].concat(params))], args).pop();

const curry = function(funct, ...args) {
    const argsLength = funct.length;
    return function(..._args) {
        _args.unshift(...args);
        if (_args.length < argsLength) return curry.call(this, funct, ..._args);
        return funct.apply(this, _args);
    }
}

const join = curry((str, arr) => arr.join(str));

const map = curry((callback, arr) => arr.map(callback));

const split = curry((gap, str) => str.split(gap));

const capitalize = x => x[0].toUpperCase() + x.slice(1).toLowerCase();

const genObj = curry((key, x) => {
    let obj = {};
    obj[key] = x;
    return obj;
})

const capitalizeName = compose(join(" "), map(capitalize), split("-"));
const convert2Obj = compose(genObj("name"), capitalizeName);
const convertName = map(convert2Obj);

const result = convertName(["john-reese", "harold-finch", "sameen-shaw"]);

console.log(result);
/*
[
  { name: 'John Reese' },
  { name: 'Harold Finch' },
  { name: 'Sameen Shaw' }
]
*/
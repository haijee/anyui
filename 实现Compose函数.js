// 组合函数 一般是从右向左的顺序

// 参考文档：https://blog.51cto.com/u_15283585/2959721
// https://www.cnblogs.com/qianxiaox/p/13679185.html

const compose1 =
  (...fns) =>
  (...args) =>
    fns
      .reduceRight((params, fn) => [fn.apply(null, [].concat(params))], args)
      .pop();

const compose = function () {
  // 将接收的参数存到一个数组， args == [multiply, add]
  const args = [].slice.apply(arguments);
  return function (x) {
    return args.reduceRight((res, cb) => cb(res), x);
  };
};

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

const add = (x) => x + 10;
const multiply = (x) => x * 10;

let calculate = compose2(multiply, add);
// 验证
async function test() {
  let res = await calculate(10);
  console.log(res); // 结果 200
}
test()

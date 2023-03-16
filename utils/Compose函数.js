// https://www.cnblogs.com/qianxiaox/p/13679185.html


const add = x => x + 10;
const multiply = x => x * 10;

const compose = function(){
  // 将接收的参数存到一个数组， args == [multiply, add]
  const args = [].slice.apply(arguments);
  return function(x) {
    return args.reduceRight((res, cb) => cb(res), x);
  }
}

// 简介版
function compose1(...fns) {
  return fns.reduce((f, g) => (...args) => {
    return f(g(...args));
  });
}

// 验证
let calculate = compose(multiply, add);
let res = calculate(10);
console.log(res);    // 结果 200

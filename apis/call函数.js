// https://blog.csdn.net/weixin_44163871/article/details/124442282

const myCall = function (ctx) {
  if (typeof this !== "function") {
    throw new Error("must a function");
  }
  ctx = ctx || window;
  ctx.fn = this;
  const args = Array.from(arguments).slice(1)
  const result = ctx.fn(...args);
  delete ctx.fn;
  return result;
};

Function.prototype.myCall = myCall;

const obj = { count: 3 };

function getCount(a, b) {
  return a + b + this.count;
}
const res = getCount.myCall(obj, 1, 2);
console.log(res);

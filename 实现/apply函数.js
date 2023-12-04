// https://blog.csdn.net/weixin_44163871/article/details/124442282

const myApply = function (ctx) {
  if (typeof this !== "function") {
    throw new Error("must a function");
  }
  ctx = ctx || window;
  ctx.fn = this;
  const args = Array.from(arguments[1]);
  const result = ctx.fn(...args);
  delete ctx.fn;
  return result;
};

Function.prototype.myApply = myApply;

const obj = { count: 1 };

function getCount(a, b) {
  return a + b + this.count;
}
const res = getCount.myApply(obj, [1, 2]);
console.log(res);

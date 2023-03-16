// https://blog.csdn.net/weixin_44163871/article/details/124442282

const myBind = function (ctx = window) {
  if (typeof this !== "function") {
    throw new Error("must a function");
  }
  let fn = this;
  const args = Array.from(arguments[1]);
  return function () {
    const args1 = Array.from(arguments)
    console.log(args,args1)
    const result = fn.apply(ctx, args.concat(args1));
    return result;
  };
};

Function.prototype.myBind = myBind;

const obj = { count: 3 };

function getCount(a, b) {
  return a + b + this.count;
}
const fn = getCount.myBind(obj, [1, 2]);
console.log(fn());

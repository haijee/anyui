// 第一个参数是需要缓存的函数，第二个参数是用来生成缓存key的方法，如果不传就用第一个参数做key
const memo = function (fn, hasher) {
  const memoFun = function () {
    const cache = memoFun.cache;
    const args = [].slice.apply(arguments);
    const hashKey = hasher ? hasher.apply(this, arguments) : args[0];
    if (!cache[hashKey]) {
      cache[hashKey] = fn.apply(this, arguments);
    }

    return cache[hashKey];
  };

  memoFun.cache = {};
  return memoFun;
};

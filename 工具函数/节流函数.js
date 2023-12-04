

function throttle(fn, wait) {
  //记录上一次函数触发时间
  let lastTime = 0;
  return function () {
    let nowTime = Date.now();
    if (nowTime - lastTime > wait) {
      //修正this指向问题
      fn.call(this);
      //同步时间
      lastTime = nowTime;
    }
  };
}

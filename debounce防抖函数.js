function debounce(fn, delay) {
  //记录上一次的延时器
  let timer = null;
  return function () {
    // 清楚上一次延时器
    clearTimeout(timer);
    //重新设置新的延时器
    timer = setTimeout(function () {
      fn.apply(this);
    }, delay);
  };
}

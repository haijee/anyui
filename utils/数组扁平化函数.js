// https://zhuanlan.zhihu.com/p/435678459


function flatten(arr) {
  var res = [];
  arr.map(item => {
      if(Array.isArray(item)) {
          res = res.concat(flatten(item));
      } else {
          res.push(item);
      }
  });
  return res;
}
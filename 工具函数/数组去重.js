// https://baijiahao.baidu.com/s?id=1757358170917223989&wfr=spider&for=pc

function unique(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i]);
    }
  }

  return res;
}

function unique(arr) {
  return arr.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  });
}

function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log("type error!");
    return;
  }
  return Array.from(new Set(arr));
}

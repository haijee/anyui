function JSONP({ url, params = {}, callbackKey = "cb", callback }) {
  // 定义本地的唯一callbackId，若是没有的话则初始化为1
  JSONP.callbackId = JSONP.callbackId || 1;
  let callbackId = JSONP.callbackId;

  // 把要执行的回调加入到JSON对象中，避免污染window
  JSONP.callbacks = JSONP.callbacks || [];
  JSONP.callbacks[callbackId] = callback;
  // 把这个名称加入到参数中: 'cb=JSONP.callbacks[1]'
  params[callbackKey] = `JSONP.callbacks[${callbackId}]`;

  // 得到'id=1&cb=JSONP.callbacks[1]'
  const paramString = Object.keys(params)
    .map((key) => {
      return `${key}=${encodeURIComponent(params[key])}`;
    })
    .join("&");

  // 创建 script 标签
  const script = document.createElement("script");
  script.setAttribute("src", `${url}?${paramString}`);
  document.body.appendChild(script);
  // id自增，保证唯一
  JSONP.callbackId++;
}

JSONP({
  url: "http://localhost:8080/api/jsonps",
  params: {
    a: "2&b=3",
    b: "4",
  },
  callbackKey: "cb",
  callback(res) {
    console.log(res);
  },
});
JSONP({
  url: "http://localhost:8080/api/jsonp",
  params: {
    id: 1,
  },
  callbackKey: "cb",
  callback(res) {
    console.log(res);
  },
});

function jsonp(url, params, callback) {
  document.body.appendChild(script);
  const script = document.createElement("script");
  script.src = `${url}?callback=callFn&params=1234`;
  script.defer = true
}

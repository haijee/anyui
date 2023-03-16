function _instanceof(L, R) {
  if (L === null) {
    return false;
  }

  if (typeof L !== "object" && typeof L !== "function") return false;
  L = L.__proto__;
  R = R.prototype;
  // let proto = Object.getPrototypeOf(L)
  while (L) {
    if (L === null) return false;
    if (L === R) return true;
    L = L.__proto__;
  }
}

console.log("检测", _instanceof(null, Array)); // false
console.log("检测", _instanceof([], Array)); // true
console.log("检测", _instanceof("", Array)); // false
console.log("检测", _instanceof({}, Object)); // true

const arr = [1, 2, 3, 4, 5];
// function findIndex(arr, val) {
//     let res = -1
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === val) {
//             res = i
//         }
//     }
//     return res
// }

// Array.prototype.myFindIndex = function(fn){
//     let res = -1
//     for (let i = 0; i < this.length; i++) {
//         if (fn(this[i],i)) {
//             res = i
//         }
//     }
// }

// console.log(findIndex(arr,7))

Array.prototype.myFindIndex = function (callback) {
  let res = -1;
  for (var i = 0, len = this.length; i < len; i++) {
    console.log(i);
    if (callback(this[i], i)) {
      return i;
    }
  }
  return res;
};
let b = arr.myFindIndex(function (ele, index) {
  return ele == 3;
});
console.log(b); // 0

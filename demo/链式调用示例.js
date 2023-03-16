// 实现 if(a===1&&a===2&&a===3)

// let a = [1,2,3];
// a. valueOf  = a.shift;

let a = {
  i: 1,
  valueOf: function () {
    return this.i++;
  },
};

console.log("-----", a == 1 && a == 2 && a == 3);

if (a == 1 && a == 2 && a == 3) {
  console.log("-----", a === 1 && a === 2 && a === 3);
}






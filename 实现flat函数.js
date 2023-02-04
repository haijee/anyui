let arr = [1, [2, 3, [4, 5, [12, 3, "zs"], 7, [8, 9, [10, 11, [1, 2, [3, 4]]]]]]];

//万能的类型检测方法
const checkType = (arr) => {
    return Object.prototype.toString.call(arr).slice(8, -1);
}

//自定义flat方法，注意：不可以使用箭头函数，使用后内部的this会指向window
Array.prototype.myFlat = function (num) {
    //判断第一层数组的类型
    let type = checkType(this);
    //创建一个新数组，用于保存拆分后的数组
    let result = [];
    //若当前对象非数组则返回undefined
    if (!Object.is(type, "Array")) {
        return;
    }
    //遍历所有子元素并判断类型，若为数组则继续递归，若不为数组则直接加入新数组
    this.forEach((item) => {
        let cellType = checkType(item);
        if (Object.is(cellType, "Array")) {
            //形参num，表示当前需要拆分多少层数组，传入Infinity则将多维直接降为一维
            num--;
            if (num < 0) {
                let newArr = result.push(item);
                return newArr;
            }
            //使用三点运算符解构，递归函数返回的数组，并加入新数组
            result.push(...item.myFlat(num));
        } else {
            result.push(item);
        }
    })
    return result;
}
console.time();

console.log(arr.flat(Infinity)); //[1, 2, 3, 4, 5, 12, 3, "zs", 7, 8, 9, 10, 11, 1, 2, 3, 4];

console.log(arr.myFlat(Infinity)); //[1, 2, 3, 4, 5, 12, 3, "zs", 7, 8, 9, 10, 11, 1, 2, 3, 4];
//自定义方法和自带的flat返回结果一致!!!!
console.timeEnd();


// 实现 5.add(3).sub(2)

Number.prototype.add = function (number) {
    if (typeof number !== 'number') {
        throw new Error('请输入数字～');
    }
    return this.valueOf() + number;
};
Number.prototype.minus = function (number) {
    if (typeof number !== 'number') {
        throw new Error('请输入数字～');
    }
    return this.valueOf() - number;
};


console.log((5).add(3).minus(2)); // 6

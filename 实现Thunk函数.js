
/*
高级柯里化有一个应用方面在于Thunk函数，Thunk函数是应用于编译器的传名调用实现，
往往是将参数放到一个临时函数之中，再将这个临时函数传入函数体，
这个临时函数就叫做Thunk 函数。
Thunk函数将参数替换成单参数的版本，且只接受回调函数作为参数。
*/


var thunk = function(time, ...args){
    return function(callback){
        setTimeout(() => callback(...args), time);
    }
}
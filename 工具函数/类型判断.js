

function getType(data){
    let type = typeof data;
    if(type !== "object"){
        return type
    }
    return Object.prototype.toString.call(data).replace(/^[object (\S+)]$/,'$1')
}

function Person(){}
console.log(getType(1)); // number
console.log(getType(true)); // boolean
console.log(getType([1,2,3])); // Array
console.log(getType(/abc/)); // RegExp
console.log(getType(new Date)); // Date
console.log(getType(new Person)); // Object
console.log(getType({})); // Object

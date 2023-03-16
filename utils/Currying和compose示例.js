
const compose = (...fns) => (...args) => fns.reduceRight((params, fn) => [fn.apply(null, [].concat(params))], args).pop();

const curry = function(funct, ...args) {
    const argsLength = funct.length;
    return function(..._args) {
        _args.unshift(...args);
        if (_args.length < argsLength) return curry.call(this, funct, ..._args);
        return funct.apply(this, _args);
    }
}

const join = curry((str, arr) => arr.join(str));

const map = curry((callback, arr) => arr.map(callback));

const split = curry((gap, str) => str.split(gap));

const capitalize = x => x[0].toUpperCase() + x.slice(1).toLowerCase();

const genObj = curry((key, x) => {
    let obj = {};
    obj[key] = x;
    return obj;
})

const capitalizeName = compose(join(" "), map(capitalize), split("-"));
const convert2Obj = compose(genObj("name"), capitalizeName);
const convertName = map(convert2Obj);

const result = convertName(["john-reese", "harold-finch", "sameen-shaw"]);

console.log(result);
/*
[
  { name: 'John Reese' },
  { name: 'Harold Finch' },
  { name: 'Sameen Shaw' }
]
*/
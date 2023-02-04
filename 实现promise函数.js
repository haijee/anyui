function promiseAll(promises) {
  return new Promise(function (resolve, reject) {
    if (!isArray(promises)) {
      return reject(new TypeError("arguments must be an array"));
    }
    var resolvedCounter = 0;
    var promiseNum = promises.length;
    var resolvedValues = new Array(promiseNum);
    for (var i = 0; i < promiseNum; i++) {
      (function (i) {
        Promise.resolve(promises[i]).then(
          function (value) {
            resolvedCounter++;
            resolvedValues[i] = value;
            if (resolvedCounter == promiseNum) {
              return resolve(resolvedValues);
            }
          },
          function (reason) {
            return reject(reason);
          }
        );
      })(i);
    }
  });
}

function promiseRace(promises) {
  return new Promise(function (resolve, reject) {
    if (!isArray(promises)) {
      return reject(new TypeError("arguments must be an array"));
    }
    var promiseNum = promises.length;
    for (var i = 0; i < promiseNum; i++) {
      (function (i) {
        Promise.resolve(promises[i]).then(
          function (value) {
            if (resolvedCounter == promiseNum) {
              return resolve(resolvedValues);
            }
          },
          function (reason) {
            return reject(reason);
          }
        );
      })(i);
    }
  });
}

Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    (value) => P.resolve(callback()).then(() => value),
    (reason) =>
      P.resolve(callback()).then(() => {
        throw reason;
      })
  );
};

// 异步队列
const LazyMan = (name) => {
  // LazyMan('Frank').sleepFirst(5).eat('supper')
  var queue = [];
  const task = () => {
    console.log(`你好，我是${name}`);
    next();
  };
  queue.push(task);
  const next = () => {
    console.log(queue);
    const first = queue.shift();
    first?.();
  };
  var api = {
    _x: queue,
    sleep(n) {
      const task = () => {
        setTimeout(() => {
          console.log(`我醒了，我刚睡了${n}秒`);
          next();
        }, n * 1000);
      };
      queue.push(task);
      return api;
    },
    eat(type) {
      const task = () => {
        console.log(type === "lunch" ? "吃午餐" : "吃晚餐");
        next();
      };
      queue.push(task);
      return api;
    },
    sleepFirst(n) {
      const task = () => {
        setTimeout(() => {
          console.log(`我醒了，我刚睡了${n}秒`);
          next();
        }, n * 1000);
      };
      queue.unshift(task);
      return api;
    },
  };
  setTimeout(() => {
    next();
  });
  return api;
};

LazyMan("Hank")
  .eat("lunch")
  .eat("supper")
  .eat("supper")
  .eat("supper")
  .eat("supper")
  .eat("supper")
  .eat("supper");

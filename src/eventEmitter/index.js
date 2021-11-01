class EventEmitter {
  static cache;

  constructor() {
    this.cache = {};
  }

  on(name, fn) {
    if (!this.cache[name]) {
      this.cache[name] = [fn];
    } else {
      this.cache[name].push(fn);
    }
  }

  off(name, fn) {
    const task = this.cache[name];

    if (task) {
      const taskIndex = task.findIndex((f) => f === fn || f.callback === fn);
      if (taskIndex >= 0) {
        task.splice(taskIndex, 1);
      }
    }
  }

  emit(name, once, ...args) {
    if (this.cache[name]) {
      const tasks = this.cache[name].slice();
      for (let fn of tasks) {
        fn(...args);
      }

      if (once) {
        delete this.cache[name];
      }
    }
  }
}

const eventEmitter = new EventEmitter();

// test
let eventBus = new EventEmitter();
let fn1 = function (name, age) {
  console.log(`${name} ${age}`);
};
let fn2 = function (name, age) {
  console.log(`hello, ${name} ${age}`);
};
eventBus.on('test', fn1);
eventBus.on('test', fn2);
eventBus.emit('test', false, 'maidang', 24);

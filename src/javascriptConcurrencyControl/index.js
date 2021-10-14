/**
 * @params list {Array} - 要迭代的数组
 * @params limit {Number} - 并发数量控制数
 * @params asyncHandle {Function} - 对`list`的每一个项的处理函数，参数为当前处理项，必须 return 一个Promise来确定是否继续进行迭代
 * @return {Promise} - 返回一个 Promise 值来确认所有数据是否迭代完成
 */
const mapLimit = (list, limit, asyncHandler) => {
  const listCopy = [].concat(list);
  const asyncList = []; // 正在进行的所有并发异步操作

  const recursion = (arr) => {
    const head = arr.shift();

    return asyncHandler(head).then(() => {
      if (arr.length !== 0) return recursion(arr);
      else return 'hello'; // 若数组还未迭代完，递归继续进行迭代
    });
  };

  /**
   * 假设limit为3
   * 那就会网asyncList这个数组中push进去三个并发程序，即上面的recursion
   * 这些并发程序每次操作的都是同一个数组的引用，所以每次arr.shift()，这三个并发程序都会被影响到
   */
  while (limit--) {
    asyncList.push(recursion(listCopy)); // limit决定并发控制数
  }

  // 也可以用allSettled，因为不一定每次请求都会发送成功
  return Promise.all(asyncList); // 所有并发异步操作都完成后，本次并发控制迭代完成
};


const dataLists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 100, 123]; // 数据列表
let count = 0;

// 处理list中每一项的callback
function callback(curItem) {
  return new Promise((resolve) => {
    count++; // 并发量+1
    setTimeout(() => {
      console.log(curItem, '当前并发量:', count--); // 模拟请求完成的todo
      resolve();
    }, Math.random() * 5000); // 模拟网络请求
  });
}


mapLimit(dataLists, 3, callback).then((response) => {
  // 模拟promise.all全部完成的todo
  console.log('promise all 全部完成', response);
});

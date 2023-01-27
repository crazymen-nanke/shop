export default {
  //开启namespace:true，该模块就成为命名空间模块
  namespaced: true,
  // 全局的状态初始值
  state: {
    count: 1,
  },
  // 计算state，获取对应值
  getters: {
    getCount(state) {
      return state.count <= 1;
    },
  },
  // 更新状态的方法，更新state的唯一方法，commit mutations
  mutations: {
    setCount(state, num) {
      state.count = num;
    },
  },
  // 可以异步操作，可以返回promise，更改数据还是传递到mutations进行更改
  actions: {
    setCountPromise(context, num) {
      return new Promise((resolve, reject) => {
        if (num > 100) {
          reject("数值不能大于100");
        } else {
          context.commit("setCount", num);
          resolve();
        }
      });
    },
  },
};

import {createStore} from "vuex";
import uInfo from "./state/UserInfo.state.js";
export default createStore({
  // 数据比较多的时候，分模块
  modules: {
    uInfo,
  },
});

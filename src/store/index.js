import {createStore} from "vuex";
import number from "./state/Number.state.js";
import uInfo from "./state/UserInfo.state.js";
export default createStore({
  // 数据比较多的时候，分模块
  modules: {
    number,
    uInfo,
  },
});

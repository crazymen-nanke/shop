<template>
  <div class="home">

    <p>{{ name }}</p>
    <p v-text="name"></p>
    <p v-html="info"></p>
    <p v-bind:data="number"></p>
    <p :data="number"></p>
    <p :class="{ 'red': isRed }" v-html="info"></p>
    <p v-if="isTrue">我是v-if存在</p>
    <p v-if="isFalse">我是v-if不存在</p>
    <p v-show="isTrue">我是v-show存在</p>
    <p v-show="isFalse">我是v-show不存在</p>
    <p>展示v-for用法</p>
    <ul>
      <li v-for="(item, index) in userList" :key="index">
        {{ item.username + ":" + item.userage }}
      </li>
    </ul>

  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from "vue"
export default {
  name: 'HomeView',
  setup() {
    const data = reactive({
      name: "小红",
      age: 20,
      info: "<i>This is text!</i>",
      number: 1,
      isRed: true,
      isTrue: true,
      isFalse: false,
      userList: [
        {
          username: "小红",
          userage: 18
        }, {
          username: "小蓝",
          userage: 19
        }, {
          username: "小黑",
          userage: 20
        }, {
          username: "小白",
          userage: 21
        }, {
          username: "小黄",
          userage: 22
        },
      ]
    })
    // 页面渲染前运行代码
    onBeforeMount(() => {
      console.log("onBeforeMount");
    })

    // 页面渲染后运行代码
    onMounted(() => {
      console.log("onMounted");
    })

    // 页面更新渲染前运行代码
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    })

    // 页面更新渲染后运行代码
    onUpdated(() => {
      console.log("onUpdated");
    })

    return {
      ...toRefs(data)
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

.red {
  color: red;
}

ul li {
  list-style-type: none;
}
</style>
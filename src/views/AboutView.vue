<template>
  <div class="about">
    <button @:click="handleClick">{{ val }}</button>
    <br>
    <input type="text" placeholder="请输入你的名字" v-model="name">
    <br>
    <input type="text" placeholder="请输入你的手机号" v-model="phone" @:input="handleInput" @blur="handleBlur">
    <br>
    <textarea name="suggest" id="suggest" cols="30" rows="10" placeholder="请输入你的建议" v-model="suggest"></textarea>
    <br>
    <p>{{ name+ "||||" + suggest}}</p>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue"
export default {
  name: "AboutView",
  setup() {
    const data = reactive({
      val: "点击我",
      name: "",
      phone: "",
      suggest: ""
    })
    const handleClick = () => {
      alert("ok!");
    }
    const handleInput = () => {
      console.log("正在输入...");
    }
    const handleBlur = () => {
      if (!/^[1][3456789][0-9]{9}$/.test(data.phone)) {
        console.log("不符合手机号规则");
      }
    }
    return {
      ...toRefs(data),
      handleClick,
      handleInput,
      handleBlur
    }
  }

}

</script>
<style>

</style>
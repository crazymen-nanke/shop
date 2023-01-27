<template>
    <div class="main">
        <div class="loginBox">
            <h2>商品后台管理系统</h2>
            <el-form ref="ruleFormRef" :model="ruleForm" status-icon>
                <el-form-item label="账户：" prop="account">
                    <el-input v-model="ruleForm.account" />
                </el-form-item>
                <el-form-item label="密码：" prop="pass">
                    <el-input v-model="ruleForm.pass" type="password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from "vue"


export default {
    name: "login",
    setup() {
        const data = reactive({
            ruleForm: [
                {
                    account: "",
                    pass: "",
                }
            ],
        })
        const submitForm = function (ruleFormRef) {
            console.log("login");
        }
        return {
            ...toRefs(data),
            submitForm
        }
    }
}
</script>
<style>
div.main {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: auto;
    background-image: url("../../assets/loginBackground.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
}

div.main div.loginBox {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: center;
}

div.main div.loginBox h2 {
    margin-bottom: 25px;
}

div.main div.loginBox .el-form .el-form-item {
    width: 260px;
}

div.main div.loginBox .el-form .el-form-item:nth-child(3) .el-button {
    width: 260px;
}

div.main div.loginBox .el-form .el-form-item label {
    color: white;
}
</style>
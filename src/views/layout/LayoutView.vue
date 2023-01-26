<template>
    <div class="common-layout">
        <el-container>
            <el-header class="common-header flex-float">
                <div class="flex">
                    <img class="logo" src="../../assets/logo.png" alt="#">
                    <h1 class="title">商品后台管理系统</h1>
                </div>
                <el-button type="danger">退出</el-button>
            </el-header>
            <el-container>
                <el-aside class="common-aside" width="200px">
                    <el-menu background-color="none" text-color="#fff" :router="true">
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon>
                                    <Avatar />
                                </el-icon>
                                <span>用户管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/users">
                                    用户列表
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-sub-menu>
                        <el-sub-menu index="2">
                            <template #title>
                                <el-icon>
                                    <Box />
                                </el-icon>
                                <span>角色管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/roles">
                                    角色列表
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-sub-menu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script>
import { Avatar } from '@element-plus/icons-vue';


export default {
    name: "layout",
    components: { Avatar }
}
</script>

<style>
.el-container {
    height: 100vh;
    overflow: hidden;
}

.common-header {
    background: rgb(35, 41, 48);
    display: flex;
}

.common-header .logo {
    width: 35px;
    height: 35px;
}

.common-header .title {
    color: white;
    margin-left: 15px;
}

.common-aside {
    background: rgb(48, 55, 65);
}
</style>
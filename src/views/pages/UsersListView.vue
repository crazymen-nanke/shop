<template>
    <div>
        <el-breadcrumb separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 白色内容区域 -->
        <div class="page_content">
            <div class="flex">
                <div class="input_box">
                    <el-input placeholder="搜索关键字" class="input-with-select">
                        <template #append>
                            <el-button><el-icon>
                                    <Search />
                                </el-icon></el-button>
                        </template>
                    </el-input>
                </div>
                <el-button type="primary">新建用户</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import { toRefs, reactive } from 'vue';
export default {
    name: "usersList",
    setup() {
        const data = reactive({

        })

        return {
            ...toRefs(data),

        }
    }
}
</script>
<style>
.input_box {
    width: 200px;
    margin-right: 15px;
}
</style>
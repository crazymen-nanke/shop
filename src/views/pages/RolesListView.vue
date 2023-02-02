<template>
    <div>
        <el-breadcrumb separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>角色列表</el-breadcrumb-item>
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
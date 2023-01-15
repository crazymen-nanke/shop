<template>
    <div>
        <h1>我是导航
            <router-link to="/index">角色列表</router-link>
            <router-link to="/users">用户列表</router-link>
        </h1>
        <h1>我是侧边栏</h1>
        <router-view />
    </div>
</template>

<script>

export default {
    name: "layout",
}
</script>
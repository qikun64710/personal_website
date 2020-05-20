<template>
    <el-breadcrumb separator="/" class="router-breadcrumb">
    <template v-for="route in $route.matched">
        <el-breadcrumb-item  v-if="route.path != '/'" :to="route.path" :key="route.path">{{ route.meta.name }}</el-breadcrumb-item>
    </template>
    </el-breadcrumb>
</template>
<script>
    export default {
        data() {
            return {
            };
        },
        mounted(){
            console.log("瞅瞅：",this.$route)
        }
    };
</script>
<style>
    .router-breadcrumb {
        font-size: 14px;
    }
</style>
<template>
    <el-menu>
       <template>
            <!-- 如果没有子路由或者只有一个子路由的, 就不生成子菜单 -->
            <el-menu-item >
                <i class="el-icon-menu"></i>
            </el-menu-item>
            <el-submenu >
                <template slot="title"><i class="el-icon-menu"></i></template>
                <el-menu-item></el-menu-item>
            </el-submenu>
        </template>
    </el-menu>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
<style lang="less" scoped>

</style>
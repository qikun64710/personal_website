<template>
  <div id="app">
    <headNave class="app__navbar"></headNave>
    <el-row class="app__main-box">
        <el-col :span="4" class="app__router-nav-box">
            <!-- <router-view></router-view> -->
            <routerNave></routerNave>
        </el-col>
        <el-col :span="20" class="app__main-content-box">
            <!-- <router-view></router-view> -->
            <router-view></router-view>
        </el-col>
      </el-row>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import headNave from './components/headNav/headNav.vue'
import routerNave from './components/routerNave/routerNave'
export default {
  name: 'App',
  components: {
    headNave,
    routerNave,
    
  }
}
</script>

<style>
@import './components/style/reset.less';
#app {
  height: 100%;
}
.app__main-box,
.app__router-nav-box,
.app__main-content-box {
    /* 全屏显示内容区域 */
    height: 100%;
}
.app__navbar {
    position: fixed !important;
    top: 0;
    z-index: 1;
    width: 100%;
}
.app__main-box{
  padding-top: 60px;
}
.app__router-nav-box {
    background-color: #3a3f52;
    overflow: auto;
}
.app__main-content-box {
    overflow: auto;
}
</style>

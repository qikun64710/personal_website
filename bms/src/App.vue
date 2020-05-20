<template>
  <div id="app">
     <Navbar class="app__navbar"></Navbar>
        <el-row class="app__main-box">
            <el-col :span="4" class="app__router-nav-box">
                <RouterNav></RouterNav>
            </el-col>
            <el-col :span="20" class="app__main-content-box">
                <router-view></router-view>
            </el-col>
        </el-row>
  </div>
</template>

<script>
import Navbar from './components/navbar/navbar.vue';
import RouterNav from './components/router-nav/router-nav.vue';
// import MainContent from './components/main-content/main-content.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    RouterNav,
    // MainContent
  }
}
</script>

<style>
@import './style/reset.less';
#app {

}
</style>

<template>
  <div id="app" >
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  mounted(){},
  methods:{
    // paperScroll(){
    //   let tpScrollTop = document.getElementById('app').scrollTop;
    //   console.log(tpScrollTop);
    // }
  }
}
</script>
<style lang="less">
@import "style/reset";
@import "style/base";
  #app{
    .overflow-auto()
  }
</style>

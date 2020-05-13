<template>
  <i class="XT-icon"
     :class="name"
     :style="{backgroundImage:src?'url('+src+')':'', width: width + 'px', height: height + 'px' }" ></i>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      require: true
    },
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    }
  },
  computed: {
    src () {
      if (this.$media[this.name]) {
        return this.$media[this.name]
      } else {
        return null
      }
    }
  }
}
</script>

<style lang="less">
.XT-icon{
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
}
</style>

<template>
    <div class="blog-detaile">
        <base-skil-details :item="item" >
            <div slot="content">
                nihao
            </div>
        </base-skil-details>
    </div>
</template>
<script>
export default {
    data(){
        return{
            item:{
                title:'vue中组件注册的个人理解',
                time:'2020-02-16',
                summary:'在vue中对于一些复用性比较高的组件,为了避免频繁的import...导入操作,我们可以将其注册为 全局组件,下来呢,我们一起来搞点事情,对->盘它(注册全局组件).'
            }
        }
    }
}
</script>
<style lang="less" scoped>

</style>
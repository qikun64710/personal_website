<template>
    <div class="baseHomeChate" :style="{left:_left,top:_top}">
        <div class="triangle"></div>
        <div class="juxing">
            <base-icon :name="name" :width='width' :height="height"></base-icon>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        name:{
            type:String
        },
        width:{
            type:[String,Number],
            default(){return 120}
        },
        height:{
            type:[String,Number],
            default(){return 120}
        },
        left:{
            type:[String,Number],
            default(){return 0}
        },
        top:{
            type:[String,Number],
            default(){ return 0}
        }
    },
    data(){
        return{

        }
    },
    computed:{
        _left(){
            if( typeof this.left === "number" ){
                return this.left+"px"
            }else{
                return this.left
            }
        },
        _top(){
            if( typeof this.top === 'number'){
                return this.top+'px'
            }else{
                return this.top
            }
        }
    }
}
</script>
<style lang="less" scoped>
    .baseHomeChate{
        position: absolute;
        .triangle{
            position: absolute;
            top: -46px;
            left: 66px;
            width: 0;
            height: 0;
            border-width: 16px;
            border-style: solid;
            border-color: transparent transparent rgba(0, 0, 0, 0.5) transparent;
        }
        .juxing{
            position: absolute;
            top: -14px;
            left: 16px;
            width: 136px;
            height: 136px;
            background:rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
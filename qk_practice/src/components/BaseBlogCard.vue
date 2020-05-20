<template>
    <div class="baseBolgCard">
        <div class="baseBolgCard-img" v-if="showImg">
            <img :src="require('../assets/image/'+item.imgsrc+'.jpg')">
        </div>
        <div class="baseBolgCard-content">
            <p v-text="`Released${item.time}`"></p>
            <h3 v-text="item.title"></h3>
            <span v-text="item.introduction"> </span>
            <a href="#" v-text="`...`"></a>
        </div>
        <div class="baseBolgCard-img" v-if="!showImg">
            <img :src="require('../assets/image/'+item.imgsrc+'.jpg')">
        </div>
    </div>
</template>
<script>
export default {
    props:{
        item:{
            type:Object,
        },
        showImg:{
            type:Boolean,
            default(){return true}
        },
    },
    mounted(){
        console.log(this.item)
    },
    data(){
        return{

        }
    }
}
</script>
<style lang="less" scoped>
    .baseBolgCard{
        display: flex;
        height: 15rem;
        margin: 20px auto 2rem;
        border-radius: 2px;
        box-shadow: 0 1px 20px -8px rgba(0, 0, 0, 0.5);
        text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
        .baseBolgCard-content{
            max-width: 18rem;
            width: 18rem;
            padding: 1rem 1.8rem;
            background: #fff;
            p{
                font-size: 12px;
                color: #888;
            }
            h3{
                color: #504e4e;
                font-size: 0.9rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin: 1rem 0;
            }
            span{
                display: block;
                color: rgba(0, 0, 0, 0.66);
                text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
                font-size: 0.75rem;
                margin-top: 1rem;
                line-height: 1.5;
                height: 5.6rem;
                text-align: left;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 5;
                overflow: hidden;
            }
            a{
                color: #000;
                font-size: 2rem;
            }
        }
        .baseBolgCard-img{
            width: 22rem;
            // max-width: 22rem;
            height: 100%;
            cursor: pointer;
            overflow: hidden;  
            img{
                width:100%;
                height: 100%;
                cursor: pointer;  
                transition: all 0.6s;  
            }
            &:hover{
                img{
                    transform: scale(1.1);
                }
            }
        }
    }
</style>
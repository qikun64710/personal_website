<template>
    <div class="baseSkilDetails">
        <div class="headImg">
            <img src="" alt="">
        </div>
        <div class="baseSkilDetails-main">
            <h1 class="title" v-text="item.title"></h1>
            <span class="releaseTime" v-text="`发布时间： ${item.time}`"></span>
            <blockquote class="summary" v-text="item.summary"></blockquote>
            <slot name="content"></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:['item'],
    data(){
        return{

        }
    },
    mounted(){
        // console.log("看看：",this.item , typeof this.item)
    }
}
</script>
<style lang="less" scoped>
    .baseSkilDetails{
        .headImg{
            width: 100%;
            height: 24rem;
            background-image: '../assets/image/imageTest01.jpg';
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            color: #ffffff;
            text-shadow: #000000 2px 2px 10px;
        }
        .baseSkilDetails-main{
            position: relative;
            width: 40rem;
            padding-top: 2rem;
            margin: 0 auto;
            h1{
                font-size: 1.6rem;
                outline: none;
                margin: 1rem 0;
                color: #333;
            }
            .releaseTime{
                position: relative;
                margin-right: 1rem;
                font-size: 0.7rem;
                color: #909090;
            }
            .summary{
                color: #666;
                padding: 0.5rem 1rem;
                margin: 1rem 0;
                border-left: 4px solid #cbcbcb;
                background-color: #f8f8f8;
                font-size: 0.8rem;
                line-height: 1.8;
            }
        }
    }
</style>
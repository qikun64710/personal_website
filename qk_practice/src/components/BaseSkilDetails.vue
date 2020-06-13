<template>
    <div class="baseSkilDetails">
        <div class="headImg" >
            <!-- <img :src="item && item.bgimg" alt=""> -->
            <!-- <img src="../assets/image/0202.png" alt=""> -->
            <img class="articleImg" :src="item && item.bgimg">
        </div>
        <div class="baseSkilDetails-main">
            <h1 class="title" v-text=" item && item.title"></h1>
            <span class="releaseTime" v-text="`发布时间： ${ item && item.time}`"></span>
            <blockquote class="summary" v-text=" item &&item.descipe"></blockquote>
            <!-- <slot name="content"></slot> -->
            <div class="content" v-html=" item &&item.text" ></div>
        </div>
    </div>
</template>
<script>
// import hljs from 'highlight.js'
import 'highlight.js/styles/tomorrow.css'
export default {
    created(){
        this.$request('selectArticle',{
            params: {
                id: 23
            },
        }).then(res=>{
            console.log("结果：",res)
            this.item = res.data.list[0]
        })
        this.src = '../assets/image/0202.png'
    },
    data(){
        return{
            item:null,
            src:null,
            srcImg:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100/food2.jpeg'
        }
    },
    watch: {
        html() {
        this.$nextTick(() => {
            this.init()
        })
        }
    },
    mounted(){
        // console.log("看看：",this.item , typeof this.item)
        this.init()
    },
    methods:{
        init(){

        }
    }
}
</script>
<style lang="less" scoped>
    .baseSkilDetails{
        .headImg{
            img{
                width: 100%;
                height: 24rem;
                text-shadow: #000000 2px 2px 10px;
            }
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
            .content /deep/.ql-syntax{
                    background-color: #23241f;
                    color: #f8f8f2;
                    overflow: visible;
                    white-space: pre-wrap;
                    margin-bottom: 5px;
                    margin-top: 5px;
                    padding: 5px 10px;
                    border-radius: 5px;
                }
        }
    }
</style>
<template>
    <div class="home">
        <xt-header></xt-header>
        <div class="homeImage">
            <div class="lifeLearn">
                <span v-text="`Life And Learn`"></span>
                <ul>
                    <li 
                        v-for="(item,index) in iconList " 
                        :key="index" 
                        @mouseenter="enterIcon(index)"
                        @mouseleave="leaveIcon"
                        @click="btnIcon(item)">
                        <base-icon :name="item.name" :width="item.width" :height="item.height"></base-icon>
                        <transition name="fade">
                            <base-home-chate 
                                v-if="item.imgName && showIndex === index" 
                                :name ='item.imgName' 
                                :left='item.left' 
                                :top='item.top'>
                            </base-home-chate>
                        </transition>
                    </li>
                </ul>
            </div>
        </div>
        <article>
            <div class="homeblog">
                <base-blog-card 
                    v-for="(item,index) in blogList" 
                    :key="index"
                    :item='item'
                    :showImg="index % 2 === 0">
                </base-blog-card>
            </div>
            <!-- <div class="essay">
                <div class="essayTitle">
                    <h1 v-text="`随笔小记`"></h1>
                </div>
                <div class="essayOne">
                    <div class="essayOne-left">
                        <p v-text="`Released 2020-05-02`"></p>
                        <h3 v-text="`vue中组件注册的个人理解`"></h3>
                        <span> 在vue中对于一些复用性比较高的组件,为了避免频繁的import...导入操作,我们可以将其注册为 全局组件,下来呢,我们一起来搞点事情,对->盘它(注册全局组件).</span>
                        <a href="#" v-text="`...`"></a>
                    </div>
                    <a class="essayOne-right" href="#"></a>
                </div>
                <div class="essayTwo">
                    <a class="essayTwo-right" href="#"></a>
                    <div class="essaytwo-left">
                        <p v-text="`Released 2020-05-02`"></p>
                        <h3 v-text="`vue中组件注册的个人理解`"></h3>
                        <span> 在vue中对于一些复用性比较高的组件,为了避免频繁的import...导入操作,我们可以将其注册为 全局组件,下来呢,我们一起来搞点事情,对->盘它(注册全局组件).</span>
                        <a href="#" v-text="`...`"></a>
                    </div>
                </div>
            </div> -->
            <div class="personalWorks" v-text="`Copyright 2020 ©Qi Kun All rights reserved.`">
                <!-- <h1 v-text="`个人作品`"></h1> -->
                <!-- <slider></slider> -->
            </div>
        </article>
    </div>
</template>
<script>
import header from './header'
// import slider from '../personalWorks/index'
import blogData from '../config/blog.json'
export default {
    components:{
        'xt-header':header,
        // slider
    },
    data(){
        return{
            blogList:blogData.datalist,
            iconList:[
                {
                    name:'github',
                    width:27,
                    height:27,
                },
                {
                    name:'twitter',
                    width:27,
                    height:27,
                    imgName:'twitterChate',
                    left:68,
                    top:100
                },
                {
                    name:'wechat',
                    width:27,
                    height:27,
                    imgName:'wechateImage',
                    left:168,
                    top:100
                },
                {
                    name:"email",
                    width:27,
                    height:27,
                }
            ],
            showIndex:-1
        }
    },
    methods:{
        btnIcon(item){
            if(item.name === 'github'){
                window.open("https://github.com/qikun64710",'top')
            }else if(item.name === 'twitter'){
                window.open('https://twitter.com/myqikun','top')
            }
        },
        enterIcon(index){
            this.showIndex = index
        },
        leaveIcon(){
            this.showIndex = -1
        }
    }
}
</script>
<style lang="less" scoped>
    .home{
        .homeImage{
            width: 100%;
            height: 100vh;
            background:url(../assets/image/header-bg.jpg);
            background-repeat: no-repeat;
            background-position: center center;
            display: flex;
            background-size: cover;
            background-attachment: fixed;
            align-items: center;
            justify-content: center;
            .lifeLearn{
                z-index: 1;
                width: 27rem;
                margin: 0 auto;
                background: rgba(0, 0, 0, 0.5);
                padding: 1rem 1rem 0.3rem 1rem;
                border-radius: 10px;
                text-align: center;
                span{
                    font: 1.4rem 'Ubuntu', sans-serif;
                    color: #fff;
                    letter-spacing: 0.15rem;
                }
                ul{
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    margin: 15px 0 15px 0;
                    position: relative;
                    li{
                        width: 50px;
                        height: 50px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        &:hover{
                            border-radius: 5px;
                            background-color: rgba(150,144,135,0.5);
                        }
                        .fade-enter-active, .fade-leave-active {
                            transition: opacity .5s;
                        }
                        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
                            opacity: 0;
                        }
                        a{
                            display: block;
                        }
                    }
                }
            }
        }
        article{
            margin-top: 50px;
            .homeblog{
                max-width: 40rem;
                margin: 0 auto;
            }
            .personalWorks{
                max-width: 40rem;
                margin: 5rem auto 4rem;
                color: #6c7378;
                font-size: 18px;
                text-align: center;
                .essayTitle{
                    width: 100%;
                    padding: 0 0 5px 0;
                    border-bottom: 1px dashed #ececec;
                    
                }
            }
        }
    }
</style>
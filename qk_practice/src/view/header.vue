<template>
    <div class="header" :class="{changeBg:showChange}" @mousemove="enterHeader" @mouseleave="leaveHeader">
        <div class="headerRight" v-text="`齐坤`"></div>
        <div class="headerLeft" @mouseenter="enterHead" @mouseleave="leaveHead" @click="clickbtn">
            <base-icon :name="homeImage" :width="18" :height="18"></base-icon>
            <span v-text="`home`"></span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            showChange:false,
            homeImage:'homeImage'
        }
    },
    created(){
    },
    mounted(){
        // 事件监听滚动条
      window.addEventListener('scroll', this.paperScroll,true)
    },
    methods:{
        clickbtn(){
            this.axios.get('http://95.179.209.29:3000').then((response)=>{
                console.log("lala:",response)
            }).catch((response)=>{
                console.log('luelue:',response);
            })
        },
        enterHead(){
            this.homeImage = 'homeOrage'
        },
        leaveHead(){
            this.homeImage = 'homeImage'
        },
        enterHeader(){
            this.showChange = true
        },
        leaveHeader(){
            this.showChange = false
        },
        paperScroll(){
            let tpScrollTop = document.getElementById('app').scrollTop;
            if(!tpScrollTop){
                this.showChange = false
            }else{
                this.showChange = true
            }
        }
    }
}
</script>
<style lang="less" scoped>
    .changeBg{
       box-shadow: 0 1px 40px -8px rgba(0, 0, 0,0.5); 
       background: rgba(0, 0, 0, 0.5);
    }
    .header{
        width: 100%;
        height: 62px;
        padding: 0 20px 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        .headerRight{
            color: rgb(203, 200, 192);
            font-size: 14px;
        }
        .headerLeft{
            height: 100%;
            line-height: 62px;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                display: block;
                width: 50px;
                text-align: center;
                font-size: 14px;
                color: rgb(203, 200, 192);
                cursor: pointer;
                transition: color 300ms ease 0s;
            }
            &:hover{
                span{
                    color: rgb(255, 165, 0) !important;
                }
            }
        }
    }
</style>
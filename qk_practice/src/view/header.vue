<template>
    <div class="header" :class="{changeBg:showChange}" @mousemove="enterHeader" @mouseleave="leaveHeader">
        <div class="headerLeft" v-text="`齐坤`"></div>
        <ul class="headerRight">
            <li v-for="(item,index) in headDataList" 
                :key="index"
                @click="btnClick(index)" 
                @mouseenter="enterLi(index)" 
                @mouseleave="leaveLi(index)">
                <base-icon :name='item.imgName' :width='18' :height="18"></base-icon>
                <span v-text="item.name" :class="{headerRight_text:index === showSpanColor}"></span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            showChange:false,
            showSpanColor:-1,
            headDataList:[
                {
                    name:'Home',
                    imgName:'homeImage',
                    width:18,
                    height:18
                },
                {
                    name:"Bolg",
                    imgName:'bolg',
                    width:18,
                    height:18
                }
            ]
        }
    },
    created(){},
    mounted(){
        // 事件监听滚动条
      window.addEventListener('scroll', this.paperScroll,true)
    },
    methods:{
        btnClick(data){
            if(data === 1){
                this.$router.push({
                    name:'jsDetaile'
                })
            }
        },
        enterLi(data){
            if(data === 0){
                this.headDataList[data].imgName = 'homeOrage'
            }else if(data === 1){
                this.headDataList[data].imgName = 'orageBolg'
            }
            this.showSpanColor = data
        },
        leaveLi(data){
            if(data === 0){
                this.headDataList[data].imgName = 'homeImage'
            }else if(data === 1){
                this.headDataList[data].imgName = 'bolg'
            }
            this.showSpanColor = -1
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
        .headerLeft{
            color: rgb(203, 200, 192);
            font-size: 14px;
            cursor: pointer;
        }
        .headerRight{
            display: flex;
            align-items: center;
            justify-content: center;
            li{
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 36px 0 0;
                span{
                    display: block;
                    font-size: 14px;
                    color: rgb(203, 200, 192);
                    margin: 0 0 0 5px;
                    cursor: pointer;
                }
                .headerRight_text{
                    color: #FFA500 !important;
                    transition: color 300ms ease 0s;
                }
            }
        }
    }
</style>
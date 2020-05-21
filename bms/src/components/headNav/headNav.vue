<template>
    <el-row class="headNave">
        <el-col :span="4" class="headNave-left">
            <img src="../../assets/logo.png" alt="">
        </el-col>
        <el-col :span="20" class="headNave-right">
            <p class="headNave-right-title"><a href="#" v-text="`齐坤`"></a></p>
            <div class="userinfo">
                <img src="../../assets/logo.png" alt="">
                <span v-text="`退出`"></span>
            </div>
        </el-col>
    </el-row>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang="less" scoped>
    .headNave{
        .headNave-left{
            background-color: #0da7ff;
            img{
                display: block;
                height: 60px;
                margin-left: auto;
                margin-right: auto;
            }
        }
        .headNave-right{
            background-color: #fff;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
            position: relative;
            display: flex;
            .headNave-right-title{
                margin-top: 0;
                margin-bottom: 0;
                margin-left: 12px;
                height: 60px;
                line-height: 60px;
                font-size: 1.5em;
                font-weight: bold;
                a{
                    color: #48576a;
                    text-decoration: none;
                }
            }
            .userinfo{
                position: absolute;
                right: 20px;
                display: flex;
                align-items: center;
                img{
                    display: block;
                    height: 60px;
                    cursor: pointer;
                }
                span{
                    display: block;
                    cursor: pointer;
                }
            }
        }
    }
</style>
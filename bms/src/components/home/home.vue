<template>
    <div class="home">
       <div>
           <span v-text="`标题：`"></span>
           <input type="text" v-model="title" placeholder="请输入标题" >
       </div>
       <div>
           <span v-text="`描述：`"></span>
           <input type="text" v-model="title" placeholder="请输入描述" >
       </div>
       <div>
           <el-upload
                class="upload-demo"
                drag
                action="#"
                :auto-upload='false'
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
       </div>
       <div>
           <span v-text="`正文：`"></span>
           <input type="text" v-model="title" placeholder="请输入标题" >
       </div>
       <button v-text="`提交`"></button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title:''
            };
        }
    };
</script>
<style lang="less" scoped>
    .home{
        div{
            display: flex;
            // width: 100%;
            // height: 40px;
            // margin: 20px 0 20px 0;
            span{
                display: block;
                height: 100%;
                text-align: center;
                line-height: 40px;
                font-size: 14px;
            }
            input{
                display: block;
                height: 100%;
                text-align: center;
                line-height: 40px;
                font-size: 14px;
            }
        }
        button{
            width: 12rem;
            height: 2rem;
            background-color: orange;
            border-radius: 10px;
            font-size: 14px;
            color: papayawhip;
        }
    }
</style>
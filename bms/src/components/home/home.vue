<template>
    <div class="home">
       <div class="home-title">
           <span v-text="`标题：`"></span>
           <input type="text" v-model="title" placeholder="请输入标题" >
       </div>
       <div class="home-descripe">
           <span v-text="`描述：`"></span>
           <input type="text" v-model="descripe" placeholder="请输入描述" >
       </div>
       <div class="home-img">
           <el-upload
                class="upload-demo"
                drag
                ref='upload'
                action="#"
                :auto-upload='false'
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
       </div>
       <div class="home-text">
           <span v-text="`正文：`"></span>
           <!-- <input type="text" v-model="title" placeholder="请输入标题" > -->
            <quilEditer @quill='quill'>
            </quilEditer>
       </div>
       <button v-text="`提交`" @click="submit"></button>
    </div>
</template>
<script>
import quilEditer from '../ue/ue.vue'
    export default {
        components:{
            quilEditer
        },
        data() {
            return {
                title:'',
                descripe:'',
                file:'',
                text:''
            };
        },
        methods:{
            submit(){
                let formDate = new FormData()
                this.file = this.$refs.upload.uploadFiles[0].raw
                formDate.append("title",this.title)
                formDate.append("descripe",this.descripe)
                formDate.append("file",this.file)
                formDate.append("text",this.text)
                this.$request("homePage",{
                    method:"post",
                    headers:{"Content-Type":"multipart/form-data"},
                    data:formDate
                }).then(res=>{
                    console.log("看看返回结果：",res)
                })
            },
            quill(data){
                this.text = data
            }
        }
    };
</script>
<style lang="less" scoped>
    .home{
        .home-title,.home-descripe,.home-img{
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
const express = require('express');
const app = express();
const cors = require('cors');
const cate = require('./controller/cateController')
const fs = require('fs')
const multer = require("multer")
var bodyParser = require('body-parser');
//解码
const decode = require('./util/decode.js')
var urlencodedParser = bodyParser.urlencoded({extended: false});
//文件存储
// var createFolder = function (folder) {
//     try{
//         fs.accessSync(folder)
//     }catch{
//         fs.mkdirSync(folder)
//     }
// }
var uploadFolder = './upload/'
// createFolder(uploadFolder)
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadFolder)
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
var upload = multer({ storage: storage })
app.use(cors());//解决跨域问题
app.get('/',cate.getCate)
app.get('/go',cate.getPostCate)
app.post('/uploadCate',urlencodedParser,cate.uploadArticle)
app.post('/uploadArticle',upload.single('file'),cate.uploadArticle)
app.get('/selecteArticle',upload.single('file'),cate.selecteArticle)
app.get('/upload/*', function (req, res) {
  let url = __dirname + "/" + req.url
  let _url = decode.decode(url)
  res.sendFile(_url);
  console.log("看看新的url:",_url);
})
//上传图片
app.post('/uploadImg',upload.single('file'),function (req,res) {
  console.log("看看上传的图片:",req.file)
  let file = req.file
  let imgurl = 'http://95.179.209.29:3000/upload/'+file.originalname
    res.send({
      "code":000,
      "msg":"服务器图片上传成功",
      "path":imgurl
  })
})
// app.get('/go',function(req,res){
//     res.send("this  houm"+req.query.find )
// })
// app.get('/',function(req,res){
//     res.send("this  houm"+req.query.find )
// })
//设置跨域请求

app.listen(3000)
console.log("服务启动成功了")
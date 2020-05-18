const express = require('express');
const app = express();
const cors = require('cors');
const cate = require('./controller/cateController')
app.use(cors());//解决跨域问题
app.get('/',cate.getCate)
app.get('/go',cate.getPostCate)
// app.get('/go',function(req,res){
//     res.send("this  houm"+req.query.find )
// })
// app.get('/',function(req,res){
//     res.send("this  houm"+req.query.find )
// })
//设置跨域请求

app.listen(3000)
console.log("服务启动成功了")
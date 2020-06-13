var bodyParser = require('body-parser');
const dbConfig = require('../util/dbconfig')
const fs = require('fs')
const multer = require('multer')
//获取分类
getCate=(req,res)=>{
    var sql = "select * from cate"
    var sqlArr = []
    var calBack = (err,data)=>{
        if(err){
        console.log('链接出错')
        }else{
        res.send({
            'list':data
        })
        }
    }
    dbConfig.sqlConnect(sql,sqlArr,calBack)
}
//获取制定的内容
getPostCate=(req,res)=>{
    let id = req.query.id
    let sql = 'select * from cate where cate_id = ?'
    let sqlArr = [id]
    var calBack = (err,data)=>{
        if(err){
        console.log('链接出错')
        }else{
        res.send({
            'list':data
        })
        }
    }
    dbConfig.sqlConnect(sql,sqlArr,calBack)
}
//文件上传
uploadCate=(req,res)=>{
    // let file = req.file
    // console.log("kankanfile:",file)
    console.dir(req.body)
    let _name = req.body.name
    let _cate_id = req.body.cate_id
    res.set({
        "content-type":'application/json; charset=utf-8'
    })
    // let {id} = req.query
    let sql = "insert into cate(name,cate_id) values (?,?)"
    let sqlArr = [_name,_cate_id]
    dbConfig.sqlConnect(sql,sqlArr,(err,data)=>{
        if(err){
            console.log("文件上传失败")
            throw '出错了'
        }else{
            res.send({
                "code":200,
                "msg":"上传成功",
            })
        }
    })
}
//添加文章
uploadArticle=(req,res)=>{
    let file = req.file
    if(file.length === 0){
        console.log("文件上传错误")
    }else{
        console.log("body齐坤:",  req.body.file)
        let _title = req.body.title
        let _pv = 0
        let _likeNum = 0
        let _typeid =  0
        let _descipe = req.body.descripe
        let _time = new Date()
        let _text = req.body.text
        let imgurl = 'http://95.179.209.29:3000/upload/'+file.originalname
        res.set({
            "content-type":'application/json; charset=utf-8'
        })
        // let {id} = req.query
        let sql = "insert into article(title,pv,likeNum,typeid,descipe,time,text,bgimg) values (?,?,?,?,?,?,?,?)"
        let sqlArr = [_title,_pv,_likeNum,_typeid,_descipe,_time,_text,imgurl]
        dbConfig.sqlConnect(sql,sqlArr,(err,data)=>{
            if(err){
                console.log("文件上传失败")
                res.send({
                    "code":400,
                    "msg":"上传失败",
                    "kan":err
                })
                throw '出错了'
            }else{
                res.send({
                    "code":200,
                    "msg":"上传成功",
                    "kan":data
                })
            }
        })
    }
}
// 查找文章
selecteArticle = (req,res)=>{
    let id = req.query.id
    let sql = 'select * from article where id = ?'
    let sqlArr = [id]
    var calBack = (err,data)=>{
        if(err){
        console.log('链接出错')
        }else{
        res.send({
            'list':data
        })
        }
    }
    dbConfig.sqlConnect(sql,sqlArr,calBack)
}
module.exports = {
    getCate,
    getPostCate,
    uploadCate,
    uploadArticle,
    selecteArticle
}
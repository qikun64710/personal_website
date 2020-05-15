const dbConfig = require('../util/dbconfig')
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
    let {id} = req.query
    let sql = 'select * from cate where status = ?'
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
    getPostCate
}
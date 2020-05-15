const mysql = require('mysql')
module.exports = {
    //数据库配置
    config:{
        host:'95.179.209.29',
        port:'3306',
        user:'root',
        password:'000000',
        database:'qk_website'
    },
    //链接数据库，使用mysql 的 连接池 链接方式
    //连接池对象
    sqlConnect:function(sql,sqlArr,callBack){
        var pool = mysql.createPool(this.config)
        pool.getConnection((err,conn)=>{
            console.log("123456")
            if(err){
                console.log('连接失败')
                return;
            }
            //事件驱动回调
            conn.query(sql,sqlArr,callBack);
            //释放连接
            conn.release()
        })
    }
}
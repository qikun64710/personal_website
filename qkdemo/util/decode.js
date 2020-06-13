 decode=(url) =>{
    let reg = /(%(\w|[abcdef])(\w|[abcdef]))+/g   
    let code = url.match(reg)
    let replace_reg = /%/g
    let decode_reg = /(%(\w|[abcdef])(\w|[abcdef]))+/
    for(let i = 0; i < code.length; i ++) {
        code[i] = code[i].replace(replace_reg, "")    //去掉百分号
        code[i] = new Buffer(code[i], "hex").toString()  //转换为utf-8字符
        url = url.replace(decode_reg, code[i])  //替换百分号编码
    }
    return url
}
module.exports = {
    decode
}

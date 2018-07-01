
// 导出自己写的处理静态文件的方法  谁用谁导入
const fs = require('fs');
module.exports = function static (path){
    return function (req,res,next){
        const filePath = path + req.path;
         fs.readFile(filePath,(err,data) =>{
            if(err){
                // 文件不存在
                next();
            }
            res.end(data);
        });
    }
}
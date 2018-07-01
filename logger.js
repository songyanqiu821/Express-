// 记录所有请求的日志模块 谁用谁导入即可

module.exports = (req,res,next) =>{
    console.log(`${req.method},${req.path},${new Date()}`);
    next();   
}


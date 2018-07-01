// 以下演示挂载多个中间件属于应用级路由 、【详细的可以看express文档】

// 挂载多个中间件其实就是给路径定义多个路由

// 引入express模块
const express = require('express');
// 引入文件模块
const fs = require('fs');
// 创建一个express实例
const app = express();
// 监听3000端口 启动服务器
app.listen(3000,() =>{
    console.log('start 3000');
});

// --------- 模拟注册--------------

// 设计路由    挂载一组中间件
    // app.get('/,'(req,res,next) =>{

    // },(req,res,next) =>{

    // })



app.get('/post',(req,res,next) =>{
    // 处理数据验证
    if(true){
        // 如果为true 执行  res.send('注册成功');中的代码
        next();
    }else{
       return res.send('验证不成功');
    }
},(req,res) => {
    // 验证成功  插入数据
    res.send('注册成功');
});

// 以上代码访问测试的时候使用localhost:3000/post进行访问
const express = require('express');
const fs = require('fs');
const app = express();

app.listen(3000,() =>{
    console.log('start  3000');
});
// 之前都是通过 Express 内置的 express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等

// 自己写一个处理静态资源的中间件
// 处理静态资源的核心就是文件路径和读取文件

app.use((req,res,next) =>{
    // 根据请求的path，拼接文件的路径【先写死】
    const filePath = './public' + req.path;
    fs.readFile(filePath,(err,data) =>{
        if(err){
            // 文件不存在
            next();
        }
        // 文件存在，输出文件
        // 发送二进制数据  不能使用send  send发送的是字符串
        res.end(data);
    })
});


// 测试的时候：图片：http://localhost:3000/img/avatar-max-img.png
            // css文件：http://localhost:3000/css/login.css



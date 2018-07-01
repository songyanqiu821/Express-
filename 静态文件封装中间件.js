const express = require('express');
const fs = require('fs');
const app = express();
app.listen(5000,() =>{
    console.log('start 50000');
});

// 注意：express提供的方法中处理静态文件是：app.use(express.static('./public'))，
// 那么就葫芦画瓢

const static = require('./静态文件封装的模块');
app.use(static('./public'));


// app.use(static('./public'));
// function static (path){
//     return function (req,res,next){
//         const filePath = path + req.path;
//          fs.readFile(filePath,(err,data) =>{
//             if(err){
//                 // 文件不存在
//                 next();
//             }
//             res.end(data);
//         });
//     }
// }

// 上面的代码是将一个函数作为另一个函数的返回值，产生了闭包【path】
// 测试的时候：图片：http://localhost:3000/img/avatar-max-img.png
            // css文件：http://localhost:3000/css/login.css

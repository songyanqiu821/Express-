const express = require('express');
const app = express();
app.listen(4000,() => {
    console.log('start 40000');
});
 


// 中间件 ：处理所有的请求 [如果在项目中多个文件想使用这个记录中间件的话，就封装成一个独立的模块 然后谁用谁引入这个弄快即可]
// app.use((req,res,next) =>{
//     console.log(`${req.method},${req.path},${new Date()}`);
//     next();    
// });
 
// 导入这个记录日志的模块
const logger = require('./logger');
//调用这个logger函数就行了
app.use(logger);

// 封装记录日志的中间件
// function logger (req,res,next){
//     console.log(`${req.method},${req.path},${new Date()}`);
//     next();   
// }


// 请求路由
app.get('/',(req,res) =>{
    res.send('index');
});

app.get('/song',(req,res) =>{
    res.send('song');
});

app.get('/liu',(req,res) =>{
    res.send('liu');
});
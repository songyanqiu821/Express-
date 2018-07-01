// 下面的记录日志的案例来说明中间件的使用

const express = require('express');
const app = express();
app.listen(3000,() =>{
    console.log('start 3000');
});


// 使用中间件，来记录所有请求的日志 【所有请求就是任意一个请求【路由或者中间件】都会经过这个中间件】
// app.use第一个参数可写可不写
app.use((req,res,next) =>{
    // 记录所有请求的日志，访问每个请求的时候 都会触发这个日志
    console.log(`${req.method},${req.path},${new Date()}`);
    // 继续后面的中间件或者路由
    next();
})


// 下面记录日志重复的代码很繁琐，此时中间件就闪亮登场了
app.get('/index',(req,res) =>{
    // 记录请求的日志  req.method请求的方式  req.path 请求的路径 new Date()请求的当前时间
    // console.log(`${req.method},${req.path},${new Date()}`);    
    res.send('index');
});

app.get('/signin',(req,res) =>{
    // 记录请求的日志  模板字符串的拼接
    // console.log(`${req.method},${req.path},${new Date()}`);
    res.send('signin');
});

app.get('/signup',(req,res) =>{
    // 记录请求的日志
    // console.log(`${req.method},${req.path},${new Date()}`);
    res.send('signup');
});


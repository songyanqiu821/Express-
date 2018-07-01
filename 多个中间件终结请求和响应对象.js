const express = require('express');
const app = express();

app.listen(5000,() =>{
    console.log('start 5000 端口');  
});

// 下面的代码执行的效果是： 执行并打印第一个中间件的代码，一直在转圈
// 解释原因：当前中间件没有终结请求-响应循环，则必须调用 next() 方法将控制权交给下一个中间件，否则请求就会挂起
app.get('/',(req,res,next) =>{
    //req.params.id 获取动态路由中的id
    console.log('ID:',req.params.id);
},(req,res) =>{ //这个函数就是一个中间件
    res.send('signin');
})

//  下面的代码执行的效果才是正确的
app.get('/',(req,res,next) =>{
    //req.params.id 获取动态路由中的id
    console.log('ID:',req.params.id);
    next();
},(req,res,next) =>{
    res.send('signin'); //signin
})
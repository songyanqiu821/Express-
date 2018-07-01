// 错误处理中间件  根其他中间件一样使用 只不过他有4个参数

// 中间件返回的响应是随意的，可以响应一个 HTML 错误页面、一句简单的话、一个 JSON 字符串，或者其他任何您想要的东西。
// 注意：所有路由中，只要出了错，都交由错误处理去处理  所以要将错误处理写在路由的最下面的

const express = require('express');
const app =express();
app.listen(3000,() =>{
    console.log('start 3000');
});

app.get('/',(req,res) =>{

    // 演示并制造错误 
    // js语言中错误处理
    try{
        JSON.parse('abc');//将数据转化成对象 
    }catch(e){//e 是系统帮我们生成的错误对象
        
        next(err);
    }
    
    res.send('index');//send返回的只能是字符串
});
app.get('/song',(req,res) =>{
    res.send('song');
});
app.post('/yang',(req,res) =>{
    res.send('yang');
})


// 统一错误处理中间件 一定要写在所有路由的最下面  这是业务逻辑
app.use((err,req,res,next) => {
    if(err){
        // 发生错误的话
        return res.send('服务器内部错误');
    }else{
        // 继续执行下个中间件或者路由
        next();
    }
})

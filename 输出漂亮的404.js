// 例如有些标识没有处理 访问的时候访问出错 展示一个漂亮的404页面

const express = require('express');
const fs = require('fs');
const app =express();
app.listen(3000,() =>{
    console.log('start 3000');
});

// 处理静态资源
app.use(express.static('./public2'));

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

// 统一处理404   一定要在最后写  路由走了一遍 发现没有人处理我 就执行这个404
app.use((req, res, next) => {
    // 返回404页面
    fs.readFile('./views/404.html', 'utf8', (err, data) => {
      res.send(data);
    });
});
  
// 中间件的功能：
//         执行任何代码。
//         修改请求和响应对象。
//         终结请求-响应循环。
//         调用堆栈中的下一个中间件


const express = require('express');

const app = express();

app.listen(3000,() =>{
    console.log('start 3000');
});

// 注意：中间件，使用get的时候必须指明第一个参数

// 演示一：以下代码的结果是只执行了 res.send('middleware ----- index');
// 原因：代码从上而下执行  而中间件又终结请求-响应循环，就不会执行下面的路由了
// app.get('/index',(req,res,next) =>{
//     res.send('middleware ----- index');
// });

// app.get('/index',(req,res) =>{
//     // 记录请求的日志  
//     console.log(`${req.method},${req.path},${new Date()}`);    
//     res.send('index');
// });



// 演示二：以下代码的结果只执行了 res.send('index'); 原因同上
// app.get('/index',(req,res) =>{
//     // 记录请求的日志  
//     console.log(`${req.method},${req.path},${new Date()}`);    
//     res.send('index');
// });

// app.get('/index',(req,res,next) =>{
//     res.send('middleware ----- index');
// });


// 演示三：下面的代码 两个app.get 都会被执行 
// 原因：中间件使用next()将控制权交给了下个路由 此外中间件中也没有终结请求和响应对象
// app.get('/index',(req,res,next) =>{
//     // res.send('middleware ----- index');
//     console.log('...index');  //...index  
//     // 继续执行后面的中间件或者路由
//     next();
// });
// app.get('/index',(req,res) =>{
//     // 记录请求的日志  
//     console.log(`${req.method},${req.path},${new Date()}`);    //GET,/index,Sun Jul 01 2018 21:12:16 GMT+0800 (中国标准时间)

//     res.send('index');//index
// });


// 演示四：

app.get('/index',(req,res,next) =>{
    console.log('...index');  
    // 设置req.body的值  ---->在中间件中给req增加了成员，next（）之后的路由可以访问req.body
    req.body = {name:'song'};   //不设置的话 下面打印出的req.body是undefined
    next();
});
app.get('/index',(req,res) =>{
    console.log(`${req.method},${req.path},${new Date()}`);    //GET,/index,Sun Jul 01 2018 21:12:16 GMT+0800 (中国标准时间)
    console.log(req.body);//{name:'song'}
    
    res.send('index');
});




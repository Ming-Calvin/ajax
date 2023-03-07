// 1.引入express
const express = require('express')

// 2.创建引用对象
const app = express()

// 3.创建路由规则
//  request   请求报文
//  response  响应报文
app.get('/', function (request, response) {
  // 设置响应报文
  response.send('响应')
})

// 4.监听端口启动服务
app.listen(8000, () => {
  console.log('服务启动')
})

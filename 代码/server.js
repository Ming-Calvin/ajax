const express = require('express')

const app = express()

app.get('/server',  (request, response) => {
  // 设置响应头  设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')

  // 设置响应体
  response.send('获取到响应体-111')
})

app.post('/server', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')

  response.send("post接收到了")
})

app.all('/json-server', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')

  let data = {
    name: 'xm'
  }

  let str = JSON.stringify(data)

  response.send(str)
})

app.get('/delay', (request, respone) => {
  respone.setHeader('Access-Control-Allow-Origin', '*')

  // 设置延迟
  setTimeout(() => {
    respone.send('delay')
  }, 3000)
})

app.get('/jquery', (request, response) => {
  // 设置响应头
  response.setHeader('Access-Control-Allow-Origin', '*')

  // 返回json数据
  const data = {
    name: 'xm'
  }

  setTimeout(() => {
    response.send(JSON.stringify(data))
  }, 2000)

})

app.all('/jquery', (request, response) => {
  // 设置响应头
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 允许自定义请求头
  response.setHeader('Access-Control-Allow-Headers', '*')

  // 返回json数据
  let data = {
    name: 'xm'
  }

  let str = JSON.stringify(data)
  response.send(str)
})

app.all('/axios', (request, response) => {
  // 设置响应头
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 允许自定义请求头
  response.setHeader('Access-Control-Allow-Headers', '*')

  // 返回json数据
  let data = {
    name: 'xm'
  }

  let str = JSON.stringify(data)
  response.send(str)
})

app.all('/fetch', (request, response) => {
  // 设置响应头
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 允许自定义请求头
  response.setHeader('Access-Control-Allow-Headers', '*')

  // 返回json数据
  let data = {
    name: 'xm'
  }

  let str = JSON.stringify(data)
  response.send(str)
})

app.all('/jsonp', (request, respone) => {
  const data = {
    name: 'xx'
  }

  // 将数据转化为字符串
  let str = JSON.stringify(data)
  // 返回结束
  // ${} -- 模板符
  respone.end(`handle(${str})`)
})

app.all('/check-name', (request, response) => {
  let data = {
    exist: 1,
    msg: 'error'
  }

  let str = JSON.stringify(data)

  response.end(`handle(${str})`)
})

app.all('/ajax-jsonp', (request, response) => {
  // 设置响应头
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 允许自定义请求头
  response.setHeader('Access-Control-Allow-Headers', '*')

  let data = {
    name: 'xm',
    age: 12
  }

  let str = JSON.stringify(data)

  let cb = request.query.callback

  response.end(`${cb}(${str})`)
})

app.all('/cors', (request, resopne) => {
  resopne.setHeader('Access-Control-Allow-Origin', '*')

  resopne.send('cors')
})


app.listen(8000, () => {
  console.log('启动')
})

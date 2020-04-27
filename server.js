var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();
var path = require('path');

const {API_SERVER = 'http://127.0.0.1:8081'} = process.env;
//设置express使用的静态文件
app.use(express.static(path.join(__dirname,"build")));
//配置express需要代理转发的服务，前端显示为3000，但是请求需要发送到8081端口，此时就需要做转发
app.use("/",proxy({
	target:API_SERVER,
	changeOrigin:true,
	secure:false,
	localAddress:'0.0.0.0'
}));
app.listen(3000,function(){
	console.log('3000');
});
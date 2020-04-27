var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();
var path = require('path');

const {API_SERVER = 'http://127.0.0.1:8081'} = process.env;
//����expressʹ�õľ�̬�ļ�
app.use(express.static(path.join(__dirname,"build")));
//����express��Ҫ����ת���ķ���ǰ����ʾΪ3000������������Ҫ���͵�8081�˿ڣ���ʱ����Ҫ��ת��
app.use("/",proxy({
	target:API_SERVER,
	changeOrigin:true,
	secure:false,
	localAddress:'0.0.0.0'
}));
app.listen(3000,function(){
	console.log('3000');
});
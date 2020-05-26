var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // 调用视图模板 index.jade，传递 title变量。
  res.render('index', { title: 'Express' });
});

// 规定路径为/hello的 GET 请求的响应方式
router.get('/hello', function(req, res, next) {

  res.send('The time is ' + new Date().toString());
});

module.exports = router;

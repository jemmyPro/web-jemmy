'use strict';

var router = require('express').Router();

var title = '北京杰米网络科技有限公司';
var nav = [
    { id: 0, name: '首页', link: '/'},
    { id: 1, name: '解决方案', link: '#'},
    { id: 2, name: '关于我们', link: '/about'},
    { id: 3, name: '加入我们', link: '#'},
]

router.get('/', function (req, res) {res.render('index', {title: title, indexActive: 1});});
router.get('/about', function (req, res) {res.render('about', {title: title, aboutActive: 1});});

module.exports = router;

'use strict';

var router = require('express').Router();

var title = '北京杰米网络科技有限公司';

router.get('/', function (req, res) {res.render('index', {title: title, indexActive: 1});});
router.get('/about', function (req, res) {res.render('about', {title: title, aboutActive: 1});});

module.exports = router;

'use strict';

var router = require('express').Router();

var title = '北京杰米网络科技有限公司';

router.get('/', function (req, res) {res.render('index', {title: title});});
router.get('/about', function (req, res) {res.render('about', {title: title});});

module.exports = router;

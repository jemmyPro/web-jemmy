'use strict';

var router = require('express').Router();

router.get('/', function (req, res) {res.render('index', {title: '杰米网络'});});

module.exports = router;

'use strict'

var express = require('express');
var usercontrollers = require('../controllers/user');

var router = express.Router();

var multipart = require('connect-multiparty');

router.get('/', usercontrollers.test);
router.post('/getUser', usercontrollers.getUser);

module.exports = router;
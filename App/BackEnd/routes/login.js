'use strict'

var express = require('express');
var usercontrollers = require('../controllers/user');
var taskcontrollers = require('../controllers/task');

var router = express.Router();

var multipart = require('connect-multiparty');

router.get('/', usercontrollers.test);
router.get('/getTasks', taskcontrollers.getTasks);
router.post('/getUser', usercontrollers.getUser);

module.exports = router;
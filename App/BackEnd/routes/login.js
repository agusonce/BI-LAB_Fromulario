'use strict'

var express = require('express');
var usercontrollers = require('../controllers/user');
var taskcontrollers = require('../controllers/task');
var projectcontrollers = require('../controllers/project');
var clientcontrollers = require('../controllers/client');

var router = express.Router();

var multipart = require('connect-multiparty');

router.get('/', usercontrollers.test);
router.get('/getTasks', taskcontrollers.getTasks);
router.get('/getProject', projectcontrollers.getProject);
router.get('/getClient', clientcontrollers.getClient);
router.post('/getUser', usercontrollers.getUser);
router.post('/setUser', usercontrollers.PostUser);

module.exports = router;
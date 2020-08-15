'use strict'

var express = require('express');
var usercontrollers = require('../controllers/user');
var taskcontrollers = require('../controllers/task');
var projectcontrollers = require('../controllers/project');
var clientcontrollers = require('../controllers/client');
var hourscontrollers = require('../controllers/hours');

var router = express.Router();

var multipart = require('connect-multiparty');

router.get('/', usercontrollers.test);

router.get('/getListAllTasks', taskcontrollers.getListAllTasks);
router.get('/getAllTasks', taskcontrollers.getAllTasks);
router.get('/getTasks', taskcontrollers.getTasks);
router.get('/getTaskNotSetProject', taskcontrollers.getTaskNotSetProject);
router.post('/setTask', taskcontrollers.setTask);
router.post('/setTaskProject', taskcontrollers.setTaskProject);

router.get('/getProject', projectcontrollers.getCustomerProject);
router.get('/ListAllProject', projectcontrollers.getListProject);

router.get('/getAllProject', projectcontrollers.getAllProject);
router.get('/getProjectNotSetClient', projectcontrollers.getProjectNotSetClient);
router.get('/getListProjectClient', projectcontrollers.getListProjectClient);
router.post('/setProject', projectcontrollers.setProject);
router.post('/setProjectClient', projectcontrollers.setProjectClient);

router.get('/getClient', clientcontrollers.getClient);
router.post('/getUser', usercontrollers.getUser);

router.get('/getHours', hourscontrollers.GetHours);
router.post('/setHours', hourscontrollers.PostHours);
router.get('/getListAllHours', hourscontrollers.getListAllHours);

module.exports = router;
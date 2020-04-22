const express = require('express');
const router = express.Router();
const employeecontroller = require('../controllers/employeecontroller');
const techstackController = require('../controllers/techstackController');
const projectController = require('../controllers/projectController');

router.get('/', employeecontroller.employee)
router.post('/employees', employeecontroller.postemployee )

router.post('/project/:employee_id',projectController.postProject )

router.post('/techstacks',techstackController.postTechstack )

module.exports = router;
const express = require('express');
const router = express.Router();
const db = require('../config/database');
const employee = require('../model/employee');
const Sequelize = require('sequelize');

router.get('/', (req, res) => 
employee.findAll()
    .then(employees => {
        console.log(employees)
        res.sendStatus(200)
    })
    .catch(err => console.log(err)));

module.exports = router;
const express = require('express');
const router = express.Router();
const db = require('../config/database');
const project = require('../model/employeeproject');
const Sequelize = require('sequelize');

router.get('/', (req, res) => 
project.findAll()
    .then(projects => {
        console.log(projects)
        res.sendStatus(200)
    })
    .catch(err => console.log(err)));

module.exports = router;
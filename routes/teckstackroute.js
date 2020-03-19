const express = require('express');
const router = express.Router();
const db = require('../config/database');
const teckstack = require('../model/teckstack');
const Sequelize = require('sequelize');


// Get gig list
router.get('/', (req, res) => 
teckstack.findAll()
    .then(techstacks => res.render('techstack', {
        techstacks
      }))
    .catch(err => console.log(err)));

    module.exports = router;
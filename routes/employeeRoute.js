import express from 'express';
const router = express.Router();
const Employee = require("../models").Employee;
const Project = require("../models").Project;

router.get('/', (req, res) => {
    Employee.findAll({
        include: [Project]
    }).then(employees => {
        res.render('index', { employees: employees });
    });
});

router.post('/employees', (req, res) => {
    Employee.create(req.body)
        .then(() => res.redirect('/'));
});

module.exports = router;
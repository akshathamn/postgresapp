import express from 'express';
const router = express.Router();
const Project = require("../models").Project;

router.post('/project/:employee_id', (req, res) => {
    Project.create({ ...req.body, EmployeeId: req.params.employee_id })
        .then(() => res.redirect('/'));
});

module.exports = router;
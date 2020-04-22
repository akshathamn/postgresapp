const Project = require("../models").Project;

exports.postProject = async ( req, res ) => {
Project.create({ ...req.body, EmployeeId: req.params.employee_id })
.then(() => res.redirect('/'));
};
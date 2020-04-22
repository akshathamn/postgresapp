const Employee = require("../models").Employee;


exports.employee = async ( req, res ) => {
Employee.findAll({
    include: [Project]
}).then(employees => {
    res.render('index', { employees: employees });
 });
};

exports.postemployee = async (req,res) => {
Employee.create(req.body)
        .then(() => res.redirect('/'));
}
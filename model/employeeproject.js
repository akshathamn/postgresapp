const Sequelize = require('sequelize');
const db = require('../config/database');

const Employeeproject = db.define('employeeproject', {
  project: {
    type: Sequelize.STRING
  }
})

Employeeproject.sync({force: true}).then(function () {
    return Employeeproject.create({
        project: 'HPE'
    });
  });
module.exports = Employeeproject;
const Sequelize = require('sequelize');
const db = require('../config/database');

const Employee = db.define('employee', {
  name: {
    type: Sequelize.STRING
  },
  place: {
    type: Sequelize.STRING
  },
  designation: {
    type: Sequelize.STRING
  },
  contact_email: {
    type: Sequelize.STRING
  }
})

Employee.sync({force: true}).then(function () {
    return Employee.create({
        name: 'john',
        place: 'mandya',
        designation: 'developer',
        contact_email: 'user@gmail.com'
    });
  });
module.exports = Employee;
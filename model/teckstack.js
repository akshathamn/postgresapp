const Sequelize = require('sequelize');
const db = require('../config/database');

const EmployeeTechStack = db.define('techstack', {
  technologies: {
    type: Sequelize.STRING
  },
  experience: {
    type: Sequelize.STRING
  }
})

EmployeeTechStack.sync({force: true}).then(function () {
    return EmployeeTechStack.create({
        technologies: 'react',
        experience: '5 years'
    });
  });

module.exports = EmployeeTechStack;
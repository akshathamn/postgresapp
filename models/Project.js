'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    project: DataTypes.STRING
  }, {});
  Project.associate = function (models) {
    // project belongsTo Employees
    Project.belongsTo(models.Employee, { foreignKey: 'EmployeeId' });
  };
  return Project;
};
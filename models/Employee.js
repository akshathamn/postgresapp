'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    designation: DataTypes.STRING
  }, {});
  Employee.associate = function (models) {
    // Employee hasmany projects
    Employee.hasMany(models.Project)
  };
  return Employee;
};
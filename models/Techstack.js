'use strict';
module.exports = (sequelize, DataTypes) => {
  const Techstack = sequelize.define('Techstack', {
    technologies: DataTypes.STRING,
    experience: DataTypes.STRING
  }, {});
  Techstack.associate = function (models) {
    // associations can be defined here
  };
  return Techstack;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Techstack = sequelize.define('Techstack', {
    experience: DataTypes.STRING
  }, {});
  Techstack.associate = function (models) {
    // associations can be defined here
  };
  return Techstack;
};
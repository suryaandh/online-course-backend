'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class enrollment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      enrollment.belongsTo(models.student, {
        foreignKey: 'studentId',
        // onDelete: 'CASCADE',
      });
      enrollment.belongsTo(models.course, {
        foreignKey: 'courseId',
        // onDelete: 'CASCADE',
      });
    }
  }
  enrollment.init({
    courseId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'enrollment',
  });
  return enrollment;
};
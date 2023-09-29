'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      course.belongsToMany(models.student, {
        through: 'enrollment',
        foreignKey: 'courseId',
      });
    }
  }
  course.init(
    {
      courseName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [1, 255],
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      instructor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [3, 255],
        },
      },
      courseImage: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          isUrl: true,
        },
      },
    },
    {
      hooks: {
        beforeCreate: (course, options) => {
          if (!course.courseImage || course.courseImage === '') {
            course.courseImage = 'https://placeholder.com/600x400';
          }
          if (!course.description || course.description === '') {
            course.description = 'Deskripsi default jika tidak ada.';
          }
          if (!course.instructor || course.instructor === '') {
            course.instructor = 'Instruktur Default';
          }
          if (!course.courseName || course.courseName === '') {
            course.courseName = 'Kursus Default';
          }
        },
      },
      sequelize,
      modelName: 'course',
    }
  );

  return course;
};

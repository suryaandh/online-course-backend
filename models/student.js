'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      student.belongsToMany(models.course, {
        through: 'enrollment',
        foreignKey: 'studentId',
      });
    }
  }
  student.init({
    studentName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 255],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
          isDate: true,
        },
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      profileImage: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isUrl: true,
        },
      },
    },
  }, {
    hooks: {
      beforeCreate: (student, options) => {
        if (!student.studentName || student.studentName === '') {
          student.studentName = 'Nama Siswa Default';
        }
        if (!student.address || student.address === '') {
          student.address = 'Alamat Default';
        }
        if (!student.profileImage || student.profileImage === '') {
          student.profileImage = 'https://placeholder.com/600x400';
        }
      },
    },
    sequelize,
    modelName: 'student',
  });
  return student;
};
const { course, enrollment, student } = require('../models');


class StudentController {
  static async getAllStudents(req, res) {
    try {
      const students = await student.findAll({
        order: [
          ['id', 'asc']
        ]
      });
      res.json(students);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async createStudent(req, res) {
    try {
      const { studentName, email, dateOfBirth, address, profileImage } = req.body;
      const students = await student.create({
        studentName, email, dateOfBirth, address, profileImage
      })
      res.status(201).json(students);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async updateStudent(req, res) {
    try {
      const id = +req.params.id;
      const { studentName, email, dateOfBirth, address, profileImage } = req.body;

      const students = await student.update({
        studentName, email, dateOfBirth, address, profileImage
      }, {
        where: { id }
      });

      if (students[0] === 1) {
        res.json({ message: 'Student updated successfully' });
      } else {
        res.status(404).json({ message: 'Student not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async deleteStudent(req, res) {
    try {
      const id = +req.params.id;
      const students = await student.destroy({
        where: { id }
      });

      if (students === 1) {
        res.json({ message: 'Student deleted successfully' });
      } else {
        res.status(404).json({ message: 'Student not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async getStudentCourse(req, res) {
    try {
      const id = +req.params.id;

      const students = await student.findByPk(id, {
        include: [
          {
            model: course,
            through: enrollment,
          },
        ],
      });

      if (students) {
        res.json(students);
      } else {
        res.status(404).json({ message: 'Student not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = StudentController;
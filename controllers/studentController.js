const { course, enrollment, student } = require('../models');


class StudentController {
  static async getAllStudents(req, res) {
    try {
      const students = await student.findAll({
        order: [
          ['id', 'asc']
        ]
      });
      // res.json(students);
      res.render('student.ejs', { students: students })
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
      // res.status(201).json(students);
      res.redirect('/students');
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
        // res.json({ message: 'Student updated successfully' });
        res.redirect('/students')
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
        // res.json({ message: 'Student deleted successfully' });
        res.redirect('/students')
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
        // res.json(students);
        res.render('detailStudent', { students: students });
      } else {
        res.status(404).json({ message: 'Student not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async getRegisterCourse(req, res) {
    try {
      const id = +req.params.id;
      const courses = await course.findAll();
      const students = await student.findByPk(id);
      res.render('registerCourse.ejs', { courses, students });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async registerCourse(req, res) {
    try {
      const studentId = +req.params.id;
      const courseId = +req.params.courseId;

      // Periksa apakah mahasiswa sudah terdaftar pada kursus ini
      const enrollmentExists = await enrollment.findOne({
        where: {
          studentId,
          courseId,
        },
      });

      if (enrollmentExists) {
        return res.status(400).json({ message: 'Student is already enrolled in this course' });
      }

      await enrollment.create({
        studentId,
        courseId,
      });

      res.redirect('/students')
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }

  }
}


module.exports = StudentController;
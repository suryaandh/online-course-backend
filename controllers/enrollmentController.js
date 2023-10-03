const { course, student, enrollment } = require('../models');

class EnrollmentController {
  static async getAllEnrollments(req, res) {
    try {
      const enrollments = await enrollment.findAll({
        order: [
          ['id', 'asc']
        ],
        include: [
          { model: course },
          { model: student },
        ],
      });
      // res.json(enrollments);
      // const uniqueStudents = Array.from(new Set(enrollments.map(enrollment => enrollment.student.id)));
      const uniqueStudents = new Set();

      const filteredEnrollments = enrollments.filter(enrollment => {
        if (!uniqueStudents.has(enrollment.student.id)) {
          uniqueStudents.add(enrollment.student.id);
          return true;
        }
        return false;
      });

      // const course = await course.findAll();

      // const students = await student.findAll({
      //   // where: {
      //   //   id: Array.from(uniqueStudents),
      //   // },
      // });
      // console.log('uniqueStudents:', Array.from(uniqueStudents));
      // console.log('filteredEnrollments length:', filteredEnrollments.length);

      // Extract student data and log it

      res.render('enrollment.ejs', { enrollments: filteredEnrollments });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async createEnrollment(req, res) {
    try {
      const { courseId, studentId } = req.body;
      const enrollments = await enrollment.create({
        courseId: +courseId,
        studentId: +studentId,
      })
      res.status(201).json(enrollments);
      // res.redirect('/')
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async updateEnrollment(req, res) {
    try {
      const id = +req.params.id;
      const { courseId, studentId } = req.body;

      const enrollments = await enrollment.update({
        courseId: +courseId,
        studentId: +studentId,
      }, {
        where: { id }
      });

      if (enrollments[0] === 1) {
        // console.log(enrollments);
        res.json({ message: 'Enrollment updated successfully' });
      } else {
        res.status(404).json({ message: 'Enrollment not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async deleteEnrollment(req, res) {
    try {
      const id = +req.params.id;
      const enrollments = await enrollment.destroy({
        where: { id }
      });

      if (enrollments === 1) {
        res.json({ message: 'Enrollment deleted successfully' });
      } else {
        res.status(404).json({ message: 'Enrollment not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = EnrollmentController;
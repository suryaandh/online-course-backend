const { enrollment } = require('../models');

class EnrollmentController {
  static async getAllEnrollments(req, res) {
    try {
      const enrollments = await enrollment.findAll({
        order: [
          ['id', 'asc']
        ]
      });
      res.json(enrollments);
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
const { course, student, enrollment } = require('../models');

class CourseController {
  static async getAllCourses(req, res) {
    try {
      const courses = await course.findAll(
        {
          order: [
            ['id', 'asc']
          ]
        }
      );
      res.json(courses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async createCourse(req, res) {
    try {
      const { courseName, description, instructor, courseImage } = req.body;
      const courses = await course.create({
        courseName, description, instructor, courseImage
      })
      res.status(201).json(courses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async updateCourse(req, res) {
    try {
      const id = +req.params.id;
      const { courseName, description, instructor, courseImage } = req.body;

      const courses = await course.update({
        courseName, description, instructor, courseImage
      }, {
        where: { id }
      });

      if (courses[0] === 1) {
        res.json({ message: 'Course updated successfully' });
      } else {
        res.status(404).json({ message: 'Course not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async deleteCourse(req, res) {
    try {
      const id = +req.params.id;
      const courses = await course.destroy({
        where: { id }
      });

      if (courses === 1) {
        res.json({ message: 'Course deleted successfully' });
      } else {
        res.status(404).json({ message: 'Course not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async getCourseStudent(req, res) {
    try {
      const id = +req.params.id;

      const courses = await course.findByPk(id, {
        include: [
          {
            model: student,
            through: enrollment,
          },
        ],
      });

      if (courses) {
        res.json(courses);
      } else {
        res.status(404).json({ message: 'Course not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = CourseController;
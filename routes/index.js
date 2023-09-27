const route = require('express').Router();

const courseRoutes = require('./course');
const studentRoutes = require('./student');
const enrollmentRoutes = require('./enrollment');


route.get('/', () => {
  res.json({
    message: "Hello world"
  })
})

route.use('/courses', courseRoutes);
route.use('/students', studentRoutes);
route.use('/enrollments', enrollmentRoutes);


module.exports = route;
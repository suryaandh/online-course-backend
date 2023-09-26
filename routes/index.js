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
route.use('/student', studentRoutes);
route.use('/enrollment', enrollmentRoutes);


module.exports = route;
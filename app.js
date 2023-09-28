require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');


const routes = require('./routes');
app.use(routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

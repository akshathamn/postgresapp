const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Database
const db = require('./config/database');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('index'));

app.use('/employees', require('./routes/employeesroute'));
app.use('/teckstack', require('./routes/teckstackroute'));
app.use('/employeeproject', require('./routes/projectroute'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');

const Employee = require("./models").Employee;
const Techstack = require("./models").Techstack;
const Project = require("./models").Project;

// Employee.create({
//     name: 'Akshatha',
//     place: 'Mandya',
//     designation: 'Developer'
// //   project: 'HPE'
//      }).then(employee=> {
//   employee.createProject({
//     project: 'HPE'
//   }).then(() => console.log('Worked'))
//   .catch(() =>console.log('----------------'))
// })

// Project.findAll({
//   include : [Employee]
// }).then(projects => {
//   console.log(projects[3].Employee);
// });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  Employee.findAll({
    include: [Project]
  }).then(employees => {
    res.render('index', { employees: employees });
  });
});

app.post('/employees', (req, res) => {
  Employee.create(req.body)
    .then(() => res.redirect('/'));
});

app.post('/project/:employee_id', (req, res) => {
  Project.create({ ...req.body, EmployeeId: req.params.employee_id })
    .then(() => res.redirect('/'));
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
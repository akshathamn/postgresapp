import express from 'express';
import bodyParser from 'body-parser';
import Handlebars from 'handlebars';
import exphbs from 'express-handlebars';
import path from 'path';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const employeeroutes=require('./routes/employeeRoute');

app.use('/',employeeroutes)
app.use(require('./routes/techStackroute'));
app.use(require('./routes/projectRoute'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));




// Employee.create({
//   name: 'user',
//   place: 'Mysore',
//   designation: 'Developer',
//  technologies: 'react'
// }).then(employee => {
//   employee.createProject({
//     project: 'cooler screen'
//   }).then(() => console.log('Worked'))
//     .catch(() => console.log('----------------'))
// })

// Project.findAll({
//   include : [Employee]
// }).then(projects => {
//   console.log(projects[3].Employee);
// });

// Techstack.create({
//   experience: '5 years',
// })
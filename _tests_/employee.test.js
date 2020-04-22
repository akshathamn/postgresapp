// const employee = require('../models/Employee');
const employeecontroller = require('../controllers/employeecontroller');

// const employee = require('../routes/employeeRoute');
const supertest = require('supertest');
var request = require('request');

const mockRequest = (sessionData) => {
    return {
      body: sessionData,
    };
  };
  
  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  describe('employee', () => {
    test('should 200 if user exists', () => {
        // expect.assertions(1);
        const req = mockRequest( {name:'a',place:'b',designation:'c',technologies:'d'} );
        const res = mockResponse();
        employeecontroller.employee(req, res)
        .then(res => console.log('result-----------',res))
        .catch(err => console.log('error---------', err))
       })
    });


import pool from './pool';

pool.on('connect', () => {
  console.log('connected to the db');
});

/**
 * Create User Table
 * CREATE TABLE test
  (id SERIAL PRIMARY KEY, 
  name VARCHAR(100) UNIQUE NOT NULL, 
  phone VARCHAR(100));
 */
const createUserTable = () => {
  const userCreateQuery = `CREATE TABLE IF NOT EXISTS users
  (id SERIAL PRIMARY KEY, 
  email VARCHAR(100) UNIQUE NOT NULL, 
  first_name VARCHAR(100), 
  last_name VARCHAR(100), 
  password VARCHAR(100) NOT NULL,
  created_on DATE NOT NULL)`;

  pool.query(userCreateQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

const createEmployeeTable = () => {
    const employeeCreateQuery = `CREATE TABLE IF NOT EXISTS employee
      (id SERIAL PRIMARY KEY,
      employee_name VARCHAR(100) NOT NULL,
      place VARCHAR(100) NOT NULL,
      age float NOT NULL,
      experienced_years VARCHAR(10) NOT NULL)`;
    //   date_of_joining DATE NOT NULL)`;
  
    pool.query(employeeCreateQuery)
      .then((res) => {
        console.log(res);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  };

  const createpositionTable = () => {
    const positionCreateQuery = `CREATE TABLE IF NOT EXISTS trip
      (id SERIAL PRIMARY KEY, 
      employee_id VARCHAR(300) NOT NULL,
      technologies VARCHAR(300) NOT NULL, 
      designation VARCHAR(300) NOT NULL,
      project VARCHAR(300) NOT NULL)`;
    pool.query(positionCreateQuery)
      .then((res) => {
        console.log(res);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  };


  const dropUserTable = () => {
    const usersDropQuery = 'DROP TABLE IF EXISTS users';
    pool.query(usersDropQuery)
      .then((res) => {
        console.log(res);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  };
  
  
  /**
   * Drop Bus Table
   */
  const dropEmployeeTable = () => {
    const employeeDropQuery = 'DROP TABLE IF EXISTS bus';
    pool.query(employeeDropQuery)
      .then((res) => {
        console.log(res);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  };

  const dropPositionTable = () => {
    const positionDropQuery = 'DROP TABLE IF EXISTS bus';
    pool.query(positionDropQuery)
      .then((res) => {
        console.log(res);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  };

  const createAllTables = () => {
    createUserTable();
    createEmployeeTable();
    createpositionTable();
   };

   const dropAllTables = () => {
    dropUserTable();
    dropEmployeeTable();
    dropPositionTable();
   };
  
  pool.on('remove', () => {
    console.log('client removed');
    process.exit(0);
  });
  

   export {
    createAllTables,
    dropAllTables,
  };
  
  require('make-runnable');
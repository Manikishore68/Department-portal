const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const mongodb = require('../database/dbOperations.js');
const ObjectID = require('mongodb').ObjectID;

// READ all employees
router.get('/employees',(request,response) => {
    // get database connection object
    let db = mongodb.getDBConnectionObject();
    db.collection('employee').find().toArray((err,docs) => {
        if(err) throw  err;
        response.json(docs);
    });
});

// READ a single Employee
router.get('/employees/:id',(request,response) => {
    let employeeID = request.params.id;
    // get database connection object
    let db = mongodb.getDBConnectionObject();
    db.collection('employee').find({_id : ObjectID(employeeID)}).toArray((err,docs) => {
        if(err) throw  err;
        let employee = docs[0];
        response.json(employee);
    });
});

// CREATE a new Employee
router.post('/employees',(request,response) => {
    let employeeID = request.params.id;
    let newEmployee = {
        first_name : request.body.first_name,
        last_name : request.body.last_name,
        email : request.body.email,
        gender : request.body.gender,
        ip_address : request.body.ip_address
    };
    // get database connection object
    let db = mongodb.getDBConnectionObject();
    db.collection('employee').insertOne(newEmployee,(err,r) => {
        if(err) throw err;
        response.json({newEmployee , r});
    });
});

// UPDATE an Existing Employee
router.put('/employees/:id',(request,response) => {
    let employeeID = request.params.id;
    let updateEmployee = {
        first_name : request.body.first_name,
        last_name : request.body.last_name,
        email : request.body.email,
        gender : request.body.gender,
        ip_address : request.body.ip_address
    };
    // get database connection object
    let db = mongodb.getDBConnectionObject();
    db.collection('employee').updateOne({_id : ObjectID(employeeID)} , {
        $set : updateEmployee
    } , (err,r) => {
        if(err) throw  err;
        response.json({updateEmployee , r });
    });
});

// DELETE an existing employee
router.delete('/employees/:id',(request,response) => {
    let employeeID = request.params.id;
    // get database connection object
    let db = mongodb.getDBConnectionObject();
    db.collection('employee').deleteOne({_id : ObjectID(employeeID)},(err,r) => {
        if(err) throw  err;
        response.json({employeeID , r});
    });
});

// Read all the Departments
router.get('/departments',(request,response)=>{
  // get database connection
  let db = mongodb.getDBConnectionObject();
  db.collection('department').find().toArray((err,docs)=>{
    if (err) throw err;
    response.json(docs);
  });
});

// Read a single Department
router.get('/departments/:id',(request,response)=>{
  let departmentID = request.params.id;
  // get database connection
  let db = mongodb.getDBConnectionObject();
  db.collection('department').find({_id : ObjectID(departmentID)}).toArray((err,docs)=>{
  if (err) throw err;
  let department = docs[0];
  response.json(department);
  })
});
// Create a new Department
router.post('/departments',(request,response)=>{
  let departmentID = request.params.id;
  let newDepartment = {
    first_name : request.body.first_name,
    last_name : request.body.last_name,
    email : request.body.email,
    departmentType : request.body.departmentType,
    ip_address : request.body.ip_address
  };
  // get database connection
  let db = mongodb.getDBConnectionObject();
  db.collection('department').insertOne(newDepartment,(err,r)=>{
    if (err) throw err;
    response.json({newDepartment,r});
  });

});
// Update an Existing Department
router.put('/departments/:id',(request,response)=>{
  let departmentID = request.params.id;
  let updateDepartment = {
    first_name : request.body.first_name,
    last_name : request.body.last_name,
    email : request.body.email,
    departmentType: request.body.departmentType,
    ip_address : request.body.ip_address
  };
  // get database connection object
  let db = mongodb.getDBConnectionObject();
  db.collection('department').updateOne({_id : ObjectID(departmentID)},{
    $set : updateDepartment
  },(err,r)=>{
    if (err) throw err;
    response.json({updateDepartment,r});
  });
});

// Delete an Existing Department
router.delete('/department/:id',(request,response)=>{
  let departmentID = request.params.id;
  // get database connection object
  let db = mongodb.getDBConnectionObject();
  db.collection('department').deleteOne({_id : ObjectID(departmentID)},(err,r)=>{
    if (err) throw err;
    response.json({departmentID,r});
  });
});
module.exports = router;

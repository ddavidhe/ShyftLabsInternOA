const express = require('express');
const router = express.Router();
let data = require('./students');
const { v4: uuidv4 } = require('uuid');

// GET 
router.get('/', (req, res) => {
    console.log( 'GET /students' );
    console.log(data)
    res.status(200).json(data);
  });

// POST
router.post('/', (req, res) =>{
    console.log( 'POST /students' );
    req.body["id"] = uuidv4()
    data.push(req.body)
    res.status(200).json(data)
})

// DELETE all students
router.delete('/', (req, res) =>{
    console.log( 'DELETE /students' );
    data=[]
    res.status(200).json(data)

})

// // UPDATE one student
// router.put('/:id', (req, res) => {
//     console.log( 'PUT /students/:id' );
//     let index = data.map(student => student.id).indexOf(req.params.id);
//     if (index > -1) {
//         data[index].firstName = req.body.firstName
//         data[index].familyName = req.body.familyName
//         data[index].DOB = req.body.DOB
//         res.json(data[index]);
//     } else {
//         next ({status: 404, message: "Student not found!"})
//     }
// })

// DELETE one student
router.delete('/:id', (req, res) =>{
    console.log( 'DELETE /students/:id' );
    data = data.filter(student => student.id !== req.params.id)
    res.status(200).json(data)
})

module.exports = router
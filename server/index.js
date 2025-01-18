const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const EmployeeModel = require('./models/Employee');
const e = require('express');

const app = express();


app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://127.0.0.1:27017/employee')

app.post("/login", (req, res) => {
    const {email, password} = req.body
    EmployeeModel
    .findOne({email: email, password: password})
    .then(employee => {
        if(employee){
            res.json("Success!")
        }else{
            res.status(400).json('Invalid Credentials')
        }
    })
    .catch(err=>res.status(400).json('Error: '+err));
    
    }
    );


app.post("/register", (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees=> res.json(employees))
    .catch(err=>res.status(400).json('Error: '+err));


    });


app.listen(3001, () => {
    console.log('Server is running on port 3001');
    });
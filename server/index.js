const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const StudentsModel = require('./models/students');
const { QuestionModelqa, QuestionModellr } = require("./models/questions");
const ConnectStudentsDB = require("./dbs/studentsdb");

ConnectStudentsDB();

const app = express();
app.use(express.json());
app.use(cors());

app.post('/register',(req,res)=>{
    StudentsModel.create(req.body)
    .then(student=>res.json(student))
    .catch(err=>res.json(err))
})

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    StudentsModel.findOne({email:email})
    .then(user=>{
        if(user){
            console.log(user.password)
            if(user.password===password){
                res.json(["success",user])
            }else{
                res.json("Incorrect Password")
            }
        }else{
            res.json("No User Found")
        }
    })    
})

app.get('/testlr',(req, res)=>{
    QuestionModellr.aggregate([{$sample:{size:10}}])
        .then(questions=>{
           if(Array.isArray(questions)){
                console.log('Number of questions:',questions.length);
                res.json(questions);
            }else{
                throw new Error('Expected questions to be an array');
            }
        })
        .catch(err=>{
            console.error(err);
            res.status(500).send(err.message);
        });
});

app.get("/test25",(req,res)=>{
    let data=[];
    QuestionModellr.aggregate([{$sample:{size:13}}])
        .then(questions=>{
            if(Array.isArray(questions)){
                console.log("Fetched from lr for test25...");
                data=[...questions];
            }else{
                throw new error("Expected questions to be in array");
            }
        })
        .catch(err=>{
            console.error(err);
            res.status(500).send(err.message);
        })
        QuestionModelqa.aggregate([{$sample:{size:12}}])
        .then(questions=>{
            if(Array.isArray(questions)){
                console.log("Fetched from qa for test25...");
                data=[...questions];
            }else{
                throw new error("Expected questions to be in array");
            }
        })
        .catch(err=>{
            console.error(err);
            res.status(500).send(err.message);
        })
        res.json(data);
})

app.get('/testqa', (req, res) => {
    QuestionModelqa.aggregate([{ $sample: { size: 10 } }])
        .then(questions => {
            if (Array.isArray(questions) && questions.length==10) {
                console.log('Number of questions:', questions.length);
                res.json(questions);
            } else {

                throw new Error('Expected questions to be an array');
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).send(err.message);
        });
});

app.put('/updateScore',(req,res)=>{
    const {email}=req.body;
    console.log(req.body)
    StudentsModel.findOneAndUpdate({email:email},req.body,{new:true,runValidators: true})
    .then(student=>{
        console.log("Updated results.");
        console.log(student)
        res.status(200).send(student);
    })
    .catch(err=>{
        console.log("Error updating user details :",err);
        return res.status(404).send('User not found');
    })

})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

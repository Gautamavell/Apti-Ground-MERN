const mongoose=require("mongoose")

const StudentSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    scorelr:Array,
    scoreqa:Array,
    score25:Array
})

const StudentsModel=mongoose.model("students",StudentSchema);
module.exports=StudentsModel
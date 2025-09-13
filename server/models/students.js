const mongoose=require("mongoose")

const StudentSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,default:''},
    scorelr:Array,
    scoreqa:Array,
    score25:Array
})

const StudentsModel=mongoose.model("students",StudentSchema,"students");

const ContactUsSchema=new mongoose.Schema({
    name:{type:String,required:true},
    phone:{type:Number,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true}
})

const ContactUsModel=mongoose.model("contactus",ContactUsSchema,"ContactUs");

module.exports={StudentsModel,ContactUsModel};


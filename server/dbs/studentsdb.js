const mongoose=require("mongoose");

const ConnectStudentsDB= async () => {
    try{
        const connection=await mongoose.connect("mongodb://127.0.0.1:27017/students");
        console.log("connected to studentsDB");
        return connection;
        
    }catch(error){
        console.error("StudentsDB connection failed:",error.message);
    }
}
module.exports=ConnectStudentsDB;
const mongoose=require("mongoose");

const ConnectStudentsDB= async () => {
    try{
        const connection=await mongoose.connect("mongodb+srv://user_apti:123@apti-ground.jgpcc.mongodb.net/?retryWrites=true&w=majority&appName=Apti-Ground",{dbName:"students"});
        console.log("connected to studentsDB");
        return connection;
        
    }catch(error){
        console.error("StudentsDB connection failed:",error.message);
    }
}
module.exports=ConnectStudentsDB;
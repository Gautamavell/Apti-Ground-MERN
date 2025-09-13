const mongoose=require("mongoose");

const ConnectStudentsDB= async () => {
    try{
        const connection=await mongoose.connect(process.env.DB_URI,{dbName:"students"});
        console.log("connected to studentsDB");
        return connection;
    }catch(error){
        console.error("StudentsDB connection failed:",error.message);
    }
}
module.exports=ConnectStudentsDB;
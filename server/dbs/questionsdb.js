const mongoose = require('mongoose'); 
const questionsDb = mongoose.createConnection('mongodb+srv://user_apti:123@apti-ground.jgpcc.mongodb.net/?retryWrites=true&w=majority&appName=Apti-Ground',{dbName:'questions'}); 
questionsDb.on('error', console.error.bind(console, 'MongoDB connection error for questionsDB:')); 
questionsDb.once('open', () => { console.log('Connected to questionsDB'); });
module.exports = questionsDb;

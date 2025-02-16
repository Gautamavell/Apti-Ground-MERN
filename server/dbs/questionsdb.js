const mongoose = require('mongoose'); 
const questionsDb = mongoose.createConnection('mongodb://localhost:27017/questions'); 
questionsDb.on('error', console.error.bind(console, 'MongoDB connection error for questionsDB:')); 
questionsDb.once('open', () => { console.log('Connected to questionsDB'); }); 
module.exports = questionsDb;

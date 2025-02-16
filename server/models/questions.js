const mongoose=require('mongoose');
const questionsDb=require('../dbs/questionsdb');

const QuestionSchema = new mongoose.Schema({
    question:{type:String,required:true},
    options:{type:[String],required:true},
    correctAnswer:{type:String,required:true}
});

const QuestionModelqa=questionsDb.model('quantitative analysis',QuestionSchema,'quantitative analysis');
const QuestionModellr=questionsDb.model('logical and reasoning',QuestionSchema,'logical and reasoning');

module.exports={QuestionModelqa,QuestionModellr};

console.log('Hit: Backend Questions Controller');

var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = {
    get_questions: function(req, res) {
        console.log('questionsFactory invokes get_questions in backend questions controller');
        Question.find({}).exec(function(error, all_questions) {
            if (error) {
                console.log('failed to load questions', error);
                res.json(error);
            }
            else {
                console.log('sucessfully loaded all questions');
                res.json(all_questions);
            };
        });
    },
    get_question: function(req, res) {
        console.log('questionsFactory invokes get_question in backend friends controller');
        console.log("REQUEST PARAMS ID", req.params.id);
        Question.findOne({_id: req.params.id}, function(error, question) {
    		if (error) {
    			console.log('failed to find friend', error);
                res.json(error);
    		}
            else {
                console.log('successfully found friend');
    			res.json(question);
    		};
    	});
    },
    create: function(req, res) {
        console.log('questionsFactory invokes create in backend questions controller');
        console.log("DATA", req.body);
        var question = new Question (req.body);
        question.save(function(error, result){
            if (error) {
                console.log('failed to create question', error);
                res.json(error);
            }
            else {
                console.log('successfully created a question');
                res.json({message: 'Thanks for Asking!', question: result});
            };
        });
    }
}

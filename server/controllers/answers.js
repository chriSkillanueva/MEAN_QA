console.log('Hit: Backend Answers Controller');

var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');

module.exports = {

    create: function(req, res) {
        console.log('answersFactory invokes create in backend answers controller');
        console.log("DATA", req.body);
        console.log("REQUEST PARAMS ID", req.params.id);
        Question.findOne({_id: req.params.id}, function(error, question){
    		var answer = new Answer(req.body);
    		answer._question = question._id;
            // now save both to the DB
            // first, into answer 'model'
            answer.save(function(error){
                if(error){
                    console.log('Error saving answer', error);
                    Question.find({}).populate('answers').exec(function(error, question){
    					res.json({question: question, answer_errors: answer.errors})
    				});
                }
                else {
                    // second, into question 'model'
                    question.answers.push(answer);
    			    question.save(function(error){
    				    if(error){
    					    console.log('Error saving answer into question model');
                        }
                        else {
                            console.log('Saved Answer');
    					    res.json({message: 'Thanks for Answering!', answer: answer})
    					}
    				});
    			}
            });
		});
    },

    get_answers: function(req, res) {
        console.log('answersFactory invokes get_answers in backend answers controller');
        console.log("REQUEST PARAMS ID", req.params.id);
        Question.findOne({_id: req.params.id}).populate('answers').exec(function(error, question) {
    		if (error) {
    			console.log('failed to find answers', error);
                res.json(error);
    		}
            else {
                console.log('successfully answers friend');
    			res.json(question);
    		};
    	});
    },

    like_answer: function(req, res) {
        console.log('answersFactory invokes like_answer in backend answers controller');
        console.log("REQUEST PARAMS ID", req.params.id);
        Answer.findOne({_id:req.params.id}, function(error, answer){
            console.log(answer);
            answer.likes += 1;
            answer.save(function(error){
                if(error){
                    console.log('failed to like answer', error);
                    res.json(err);
                }
                else {
                    console.log('successfully liked an answer');
                    res.json({message: 'Liked an Answer!', answer: answer});
                }
            })
        })
    }

}

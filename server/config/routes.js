console.log('Hit: Backend Routes');

var questions = require('../controllers/questions.js');
var answers = require('../controllers/answers.js');

module.exports = function(app){
    app.post('/question', function(req, res) {
        questions.create(req, res)
    });
    app.get('/all', function(req, res) {
        questions.get_questions(req, res)
    });
    app.get('/question/:id', function(req, res) {
        questions.get_question(req, res)
    });
    app.post('/answer/:id', function(req, res) {
        answers.create(req, res)
    });
    app.get('/answers/:id', function(req, res) {
        answers.get_answers(req, res)
    });
    app.post('/like/:id', function(req, res) {
        answers.like_answer(req, res)
    });
}

console.log('Hit: questionsFactory');

app.factory('questionsFactory', ['$http', function($http) {
    var factory = {};

    factory.createQuestion = function(newQuestion, callback){
        console.log('Call to Backend');
        $http.post('/question', newQuestion).then(function(returned_data){
            console.log('Returned:', returned_data);
            console.log('To client:',returned_data.data);
            callback(returned_data.data);
        });
    };

    factory.getQuestions = function(callback) {
        console.log('homeController invoked getQuestions in questionsFactory');
        console.log('Call to Backend');
        $http.get('/all').then(function(returned_data){
            console.log('Returned:', returned_data);
            console.log('To client:', returned_data.data);
            callback(returned_data.data);
        });
    };

    factory.getQuestion = function(id, callback){
        console.log('answerController invoked getQuestion in questionsFactory');
        console.log('Call to Backend');
		$http.get('/question/' + id).then(function(returned_data){
            console.log('Returned:', returned_data);
            console.log('To client:',returned_data.data);
            callback(returned_data.data);
		});
	};
    return factory;
}]);

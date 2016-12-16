console.log('Hit: answersFactory');

app.factory('answersFactory', ['$http', function($http) {
    var factory = {};

    factory.createAnswer = function(newQuestion, id, callback){
        console.log('Call to Backend');
        $http.post('/answer/' + id, newQuestion).then(function(returned_data){
            console.log('Returned:', returned_data);
            console.log('To client:',returned_data.data);
            callback(returned_data.data);
        });
    };

    factory.getAnswers = function(id, callback){
        console.log('Call to Backend');
        console.log('questionController invoked getAnswers in questionsFactory');
        $http.get('/answers/' + id).then(function(returned_data){
            console.log('Returned:', returned_data);
            console.log('To client:',returned_data.data);
            callback(returned_data.data);
        });
    };

    factory.plusOne = function(id, callback){
        console.log('Call to Backend');
        $http.post('/like/' + id).then(function(returned_data){
            console.log('Returned:', returned_data);
            console.log('To client:',returned_data.data);
            callback(returned_data.data);
        });
    };

    return factory;
}]);

console.log('Hit: answerController');

app.controller('answerController', ['$scope', 'questionsFactory', 'answersFactory', '$location', '$window', '$cookies', '$routeParams', function ($scope, questionsFactory, answersFactory, $location, $window, $cookies, $routeParams){

    var currentUser = $cookies.get('name');
	console.log(currentUser);

	if (currentUser){
		console.log('User is at Answer Page');
	}
    else {
		console.log('User not logged in, redirecting to login');
		$location.url('/login');
	}

    $scope.user = currentUser

	$scope.logout = function(){
        console.log('Logging Out User');
		$cookies.remove('name');
        $window.alert('Goodbye');
		$location.url('/login');
	}

    questionsFactory.getQuestion($routeParams.id, function(data){
		$scope.question = data;
    });

    $scope.answerQuestion = function() {
        console.log('Client invoked answerQuestion in frontend answerController')
        console.log('Now, invoking createAnswer in  questionsFactory');
        answersFactory.createAnswer($scope.answer, $routeParams.id, function(data) {
            if (data.answer_errors) {
                console.log('Error:', data.answer_errors.answer.message);
                $scope.messages = data.answer_errors.answer.message;
            }
            else {
                $scope.message = data.message;
                $window.alert($scope.message);
                $location.url('/home')
            }
        });
    };
}]);

console.log('Hit: questionController');

app.controller('questionController', ['$scope', 'questionsFactory', 'answersFactory', '$location', '$window', '$cookies', '$routeParams', function ($scope, questionsFactory, answersFactory, $location, $window, $cookies, $routeParams){

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

    answersFactory.getAnswers($routeParams.id, function(data){
		$scope.answers = data.answers;
    });

    $scope.like = function(id){
        console.log('Client invoked like in frontend questionController')
        console.log('Now, invoking plusOne in  answersFactory');
        answersFactory.plusOne(id, function(data){
            if (data.errors) {
                console.log('Error:', data.errors);
            }
            else {
                console.log('Updating Likes');
                answersFactory.getAnswers($routeParams.id, function(data){
            		$scope.answers = data.answers;
                });
            }
        })
	}
}]);

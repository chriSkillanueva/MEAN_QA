console.log('Hit: askController');

app.controller('askController', ['$scope', 'questionsFactory', '$location', '$window', '$cookies', function ($scope, questionsFactory, $location, $window, $cookies){

    var currentUser = $cookies.get('name');
	console.log(currentUser);

	if (currentUser){
		console.log('User is at Ask Page');
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

    $scope.askQuestion = function() {
        console.log('Client invoked askQuestion in frontend askController')
        console.log('Now, invoking create in  questionsFactory');
        questionsFactory.createQuestion($scope.question, function(data) {
            if (data.errors) {
                console.log('Errors:', data.errors);
                $scope.messages = data.errors;
            }
            else {
                $scope.message = data.message;
                $window.alert($scope.message);
                $location.url('/home')
            }
        });
    };
}]);

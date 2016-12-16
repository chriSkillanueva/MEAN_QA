console.log('Hit: homeController');

app.controller('homeController', ['$scope', 'questionsFactory', '$location', '$window', '$cookies', function ($scope, questionsFactory, $location, $window, $cookies){

    var currentUser = $cookies.get('name');
	console.log(currentUser);

	if (currentUser){
		console.log('User is at Home Page');
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

    questionsFactory.getQuestions(function (data) {
        $scope.questions = data;
    });
}]);

console.log('Hit: loginController');

app.controller('loginController', ['$scope', '$location', '$window', '$cookies', function ($scope, $location, $window, $cookies){

    $scope.login = function() {
        console.log('Client invoked login in frontend  loginController')
        console.log('Logging in User')
        $cookies.put('name', $scope.user.name);
    	$window.alert('Welcome!');
        $location.url('/home')
    }
}]);

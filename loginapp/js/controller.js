var app =  angular.module('loginApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'loginapp/loginform.html'
	})
	.when('/dashboard',{
		resolve:{
			"check":function($location,$rootScope) {
				if (!$rootScope.loggedIn) {
					$location.path('/')
				}else{
					templateUrl: 'loginapp/homepage.html'
				}
			}
		},
		
	})
	.otherwise({
		template: 'error 404!'
	});
});

app.controller('loginCtrl', function($scope, $location){
	$scope.submit= function 	() {
		var uName = $scope.username;
		var uPass = $scope.password;
		if (uName=='admin'&& uPass=='admin') {
			$rootScope.loggedIn=true;
			$location.path('/homepage');

		}else{$location.path('/error')}
	}
});
app.config(function($routeProvider){
	routeProvider
	.when('/',
	{
		templateUrl : 'loginform.html'
	})
	.when('/homepage',{
		templateUrl : 'homepage.html'
	})
	.otherwise({
	    redirectTo : '/'
	})
})


app.controller('loginCtrl',function($scope){
	$scope.submit = function(){
		var uname = $scope.username;
		var password = $scope.password;
		if($scope.username=='admin' && $scope.password=='admin')
		{
			$location.path('/homepage');
		}
	}
	
}
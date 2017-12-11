var appModelName =angular.module("appModelName",[]);
appModelName.controller('appController',['$scope',  function($scope){
			$scope.reset =function(){
				$scope.firstName = "sekar";
				$scope.lastName = "raj";
				$scope.email = "sekarraj@gmail.com";
			}

			


}]);
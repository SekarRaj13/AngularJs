var appModelName =angular.module("appModelName",[]);
appModelName.controller('appController',['$scope',  function($scope){
      $scope.reset = function(){
         $scope.firstName = "Mahesh";
         $scope.lastName = "Parashar";
         $scope.email = "MaheshParashar@tutorialspoint.com";
      }   


}]);
var appModelName =angular.module("appModelName",[]);
appModelName.controller('appController1',['$scope','$http',  function($scope,$http){

	// controllers data

      $scope.studentData = {
         firstName : "Mahesh",
         lastName : "Parashar",
         fullName :function(){
         	var studentData1;
         	studentData1 = $scope.studentData;
   			return  studentData1.firstName + " " + studentData1.lastName;

         }
      } 

      // end 

     //  filters data start

      

     $scope.student = {
               firstName: "Mahesh",
               lastName: "Parashar",
               fees:500,
               
               subjects:[
                  {name:'Physics',marks:70},
                  {name:'Chemistry',marks:80},
                  {name:'Math',marks:88}
               ],
               
               fullName: function() {
                  var studentObject;
                  studentObject = $scope.student;
                  return studentObject.firstName + " " + studentObject.lastName;
               }
            };


   // http ajax call

      var url = "data.txt";

      $http.get(url).then( function(response) {
               $scope.students = response.data;
            });

   // complete http ajax call
}]);
var app = angular.module("app", []);

app.controller("appCtrl", function($scope) {  
    $scope.message="Calculator";
    $scope.try= "";
    $scope.submit = function(){
        if($scope.Num1 == null || $scope.Num2 == null)
        {
            $scope.try = 0;
        }
        else
        {
            $scope.try = $scope.Num1 * $scope.Num2
        }
    } 
    });


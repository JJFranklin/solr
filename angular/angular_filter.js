/**
 * Created by Frank on 2016/12/28.
 */
var myModule=angular.module("myModule",[]);

myModule.controller("myCtrl",["$scope","$http",function($scope,$http){
    $http({
        method:"get",
        url:"user.json"
    }).success(function(data,status,header,config){
        console.log(data);
        if(data){
            $scope.users=data;
        }
        console.log(status);
        console.log(header);
        console.log(config);
    }).error(function(data,status,header,config){
        console.log(status);
        console.log(header);
        console.log(config);
    });
}]);
/**
 * Created by Frank on 2016/12/24.
 */

//angular模块化的写法
var myModule=angular.module("HelloAngular",[]);
myModule.controller("helloAngular",["$scope",function ($scope) {
    $scope.info={
        name:"hello"
    };
    $scope.dd={
        sex:"masle"
    };
}]);

//angular一般的写法
// function HelloAngular($scope){
//     $scope.info={
//         name:"Franklin"
//     };
// }
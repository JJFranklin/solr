/**
 * Created by Frank on 2016/12/25.
 */

var userModule=angular.module("formAngular",[]);
userModule.controller("formCtrl",function($scope){
    $scope.info={
        mail:"223534@qq.com",
        password:"123456",
        isCheck:true
    };
    $scope.setInfo=function(){
        $scope.info={
            mail:"110110@qq.com",
            password:"110110231321",
            isCheck:false
        };
    };
    $scope.getInfo=function(){
        alert($scope.info.mail+"\n"+$scope.info.password+"\n"+$scope.info.isCheck);
    };
    $scope.resetInfo=function(){
        $scope.info={
            mail:"223534@qq.com",
            password:"123456",
            isCheck:true
        };
    }

});

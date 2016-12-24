/**
 * Created by Frank on 2016/12/24.
 */
function PController($scope){
    $scope.infor={
        name:"Park"
    };
    $scope.alertCon=function(){
        alert("commen");
    }
}

function child1Con($scope){
    $scope.infor1={
        name:"child1"
    };
     $scope.child1Alert1=function(){
         alert("child1");
     };
}
function child4Con($scope){
    $scope.infor4={
        name:"child4"
    };
    $scope.child1Alert4=function(){
        alert("child4");
    };
}
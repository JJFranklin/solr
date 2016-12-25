/**
 * Created by Frank on 2016/12/25.
 */
function IndexAngular($scope){
    $scope.names=["Franklin","boy","girl","bad"];

}

function SayHello($rootScope,$scope){
    $rootScope.Title="Angular";
    $scope.sex="male";
}
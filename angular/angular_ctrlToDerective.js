/**
 * Created by hemingming on 2016/12/28.
 */
var myModule=angular.module("HelloApp",[]);

myModule.run(function($templateCache){
    $templateCache.put("hello.html","<div>goodMorning<div ng-transclude></div></div>")

});
myModule.controller("MyCtrl",["$scope",function($scope){
    $scope.loadData=function(){
        alert("Data is loading...");
    }
}]);
myModule.controller("myctrl2",["$scope",function($scope){
    $scope.loadData2=function(){
        alert("Data is out...");
    }
}]);
myModule.directive("hello",function($templateCache){
    return{
        restrict:"EA",
        // transclude:true,//替换其中指令中使用模板
        // template:$templateCache.get("hello.html"),
        // template:"<div>goodMorning<div ng-transclude></div></div>",
        // templateUrl:$te,
        replace:true,
        //angular中Dom的操纵全部在link中进行
        link:function(scope,ele,attr){
            ele.on("mouseenter",function(){
                //scope.isLoading();
                //scope.$apply("isLoading()")
                //使用属性进行加载同一个方法
                scope.$apply(attr.loaddata);
            });

        }
    };
});
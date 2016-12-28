/**
 * Created by hemingming on 2016/12/
 */
var myModule=angular.module("myAngular",[]);
myModule.directive("infor",function(){
   return {
       scope:{},//创建独立的作用域
       restrict:"ECMA",
       //暴露出指令的处理方式，给外界调用
       controller:function($scope){
           $scope.info=[];
           this.alertName=function(){
               $scope.info.push("Fanklin");
               //alert("my name is Franklin");
           };
           this.alertNameAndSex=function(){
               $scope.info.push("male");
               //alert("my name is Ftranklin"+"\n"+"my sex is male");
           };
           this.alertNameAndSexAndFav=function(){
              //alert("my name is Ftranklin"+"\n"+"my sex is male"+"\n"+"my fav is apple");
               $scope.info.push("apple");
           };
       },
       link:function(scope,ele,attr){
           ele.on("mouseenter",function(){
               console.log(scope.info);
           });
       }
   }
});

myModule.directive("name",function(){
    return {
        require:"^infor",
        //infoCtrl作为第四个参数,可以使用父指令内部的方法
        link:function(scope,ele,attr,infoCtrl){
            infoCtrl.alertName();
        }
    }

});

myModule.directive("sex",function(){
    return {
        require:"^infor",
        link:function(scope,ele,attr,infoCtrl){
            infoCtrl.alertNameAndSex();
        }
    }

});

myModule.directive("fav",function(){
    return {
        require:"^infor",
        link:function(scope,ele,attr,infoCtrl){
            infoCtrl.alertNameAndSexAndFav();
        }
    }
});
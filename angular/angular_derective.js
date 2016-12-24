/**
 * Created by Frank on 2016/12/24.
 */
var myModule=angular.module("myModule",[]);
myModule.directive("name",function(){
    return {
        restrict:"E",
        template:"<p>My name is Franklin</p>",
        replace:true
    }
});
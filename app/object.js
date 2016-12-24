/**
 * Created by Frank on 2016/12/22.
 */
// var object=new Object();
// object.name="Franklin";
// object.setName=function(name){
//     this.name=name;
// };
//
// object.getName=function(old){
//     console.log("I'm Franklin");
// };
//
// console.dir(object);

console.time("the end");
// var sum=0;
// for(var i=0;i<10000;i++){
//     sum=+i;
// }
// console.info("The result is"+"  "+sum);
var timer=setInterval(function(){
    console.log("out");
},"5000");
console.timeEnd("the end");
clearInterval(timer);
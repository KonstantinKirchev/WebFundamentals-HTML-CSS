
(function(){
    var a = 6;
    console.log(a);
}());
var factoriel = 1;
for (var i = 1; i < 10; i++) {
    factoriel *=i;
}
console.log(factoriel);

var arr = [23,21,45,'hello'];
arr.reverse().sort();
for(var index in arr){
    console.log(arr[index]);
}

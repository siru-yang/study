// function func(){
//     console.log(count)
// }
// var count = 2
// func()

var foo = 1;
console.log(foo); // 1
var foo = function(){
    console.log("foo");
}
console.log(foo); // 1
foo()// foo is not a function
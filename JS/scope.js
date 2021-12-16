// console.log(a);
// var a = "a";
// var foo = () => {
//     console.log(a);
//     var a = "a1";
// }
// foo();

// console.log(a);
// let a = "a";
// let foo = () => {
//     console.log(a);
//     let a = "a1";
// }
// foo();

var a = 1;
function foo() {
    a = 10;
    console.log(a);
    return;
    function a() {};
}
foo();
console.log(a);
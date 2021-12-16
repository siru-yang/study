function dfs() {
    console.log("dfs")
    subDfs()
}

var subDfs = function () {
    console.log("sub")
}

function Student() {
    this.name = "ysr"
    this.age = 23
}

s = new Student()

car = "var"
car2 = String("var")
car3 = new String("var")
dict = { a: 2, b: 3 }
array = Array(2).fill().map(()=>{return Array(2).fill(false)})
number = 1
number2 = Number(1)
bool = true
var n


console.log("typeof dfs:", typeof dfs)
console.log("subDfs instanceof Function:", subDfs instanceof Function)
console.log("s instanceof Student:", s instanceof Student)
console.log("typeof s:", typeof s)
console.log("typeof subDfs:", typeof subDfs)
console.log("typeof car:", typeof car)
console.log("typeof car2:", typeof car2)
console.log("typeof car3:", typeof car3)
console.log("car instanceof String:",car instanceof String)
console.log("car2 instanceof String:",car2 instanceof String)
console.log("car3 instanceof String:",car3 instanceof String)
console.log("typeof dict:", typeof dict)
console.log("typeof Array:", typeof array)
console.log("array instanceof Array:", array instanceof Array)
console.log("typeof number:", typeof number)
console.log("typeof number2:", typeof number2)
console.log("typeof bool:", typeof bool)
console.log("typeof n:", typeof n)
console.log("typeof m:", typeof m)
console.log("array:",array)
console.log(Math.round(9/10))

console.log("array+number:",car + 1)
console.log("number to string:",typeof number.toString())


dfs()
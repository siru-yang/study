// 1.创建一个obj
// 2.将该obj的__proto__指向construct的prototype
// 3.利用apply对这个obj执行construct 
// 4.如果construct返回值是obj，则返回该obj，否则返回1中的obj
function New() {
    let obj = {};
    // console.log(arguments)
    let Construct = Array.prototype.shift.call(arguments)
    // console.log(arguments)
    obj.__proto__ = Construct.prototype;
    let res = Construct.apply(obj, arguments)
    return typeof res === 'object' ? res : obj
}

function Bar(name, age) {
    this.name = name;
    this.age = age;
}

Bar.prototype.city = "China"

let person = New(Bar, "ysr", 22)
console.log(person)
console.log(person.city)
function instance(obj, construct) {
    let type = typeof obj
    let typeList = ["number", "boolean", "string", "null", "undefined", "symbol"]
    if (typeList.includes(type)) {
        return false
    }
    let proto = obj.__proto__
    let prototype = construct.prototype
    if (!proto) {
        return false
    }
    if (proto === prototype) {
        return true
    }
    return instance(proto, construct)
}


console.log(instance(111, Number))
let str = new String("1111")
let num = new Number(1)
console.log(str instanceof String)
console.log(instance(str, String))
console.log(num instanceof Number)
console.log(instance(num, Number))
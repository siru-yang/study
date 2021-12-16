Function.prototype.myCall = function (obj) {
    obj.newFunc = this
    let args = ""
    for (let i = 1; i < arguments.length; i++) {
        args += 'arguments[' + i + '],'
    }
    // args.slice(0, -1)
    let result = eval('obj.newFunc(' + args.slice(0, -1) + ')')
    delete obj.newFunc
    return result
}

function myfunc(name) {
    console.log(this.city, name)
}

let myObj = { city: "HZ" }

myfunc.myCall(myObj, "ysr")
myfunc.myCall("ysr")
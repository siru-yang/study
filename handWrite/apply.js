Function.prototype.apply = function (obj, arr) {
    obj.newFunc = this;
    let args = ""
    for (let index = 0; index < arr.length; index++) {
        args += 'arr[' + index + '],'
    }
    let result = eval('obj.newFunc(' + args.slice(0, -1) + ')')
    delete obj.newFunc
    return result
}


let myObj = {
    name: "ysr"
}
function myfunc(city) {
    console.log(this.name, city)
}


myfunc.apply(myObj, ['hz'])
Array.prototype.myIndexOf = function (param) {
    let array = this
    for (let i = 0; i < array.length; i++) {
        if (array[i] == param) {
            return i
        }
    }
    return -1
}

Array.prototype.myFliter = function (func, thisArg) {
    const result = []
    let array = this
    for (let i = 0; i < array.length; i++) {
        let res = func.call(thisArg, array[i], i, array)
        if (res) { result.push(res) }
    }
    return result
}

Array.prototype.myForEach = function (func, thisArg) {
    let array = this
    for (let i = 0; i < array.length; i++) {
        func.call(thisArg, array[i], i, array)
    }
}

Array.prototype.myMap = function (func, thisArg) {
    let result = []
    let array = this
    for (let i = 0; i < array.length; i++) {
        result.push(func.call(array[i], i, array, thisArg))
    }
    return result
}

Array.prototype.myReduce = function (func, init) {
    let array = this
    let index = 0
    let pre
    if (arguments.length == 1) {
        if (array.length == 0) {
            return "error"
        }
        pre = array[index++]
    } else {
        pre = init
    }
    for (; index < array.length; index++) {
        pre = func.call(null, pre, array[index], index, array)
    }
    return pre
}


let sum = 0
let array = [1, 2, 3, 4, 5, 6, 7]
let filerArray = array.myFliter(item => { if (item < 5) return item })
array.myForEach(item => { sum += item })
console.log("filerArray:", filerArray)
console.log("array.myIndexOf(3):", array.myIndexOf(3))
console.log("sum:", sum)
console.log("mapArray:", array.map(item => { if (item < 4) return item }))
console.log("myReduce:", array.myReduce((pre, next) => { return (pre + next) }))
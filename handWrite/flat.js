Array.prototype.flat1 = function (i) {
    if (!i) i = 1;
    if (i < 0) return
    let newArray = []
    for (let index = 0; index < this.length; index++) {
        if (this[index] instanceof Array) {
            // console.log("迭代：",this[index].flat1(i - 1))
            // console.log("newArray concat",newArray)
            // console.log(newArray.concat(this[index].flat1(i - 1)))
            newArray = newArray.concat(this[index].flat1(i - 1))
            console.log("迭代之后",newArray)
        } else {
            newArray.push(this[index])
        }
    }
    console.log("newArray:", newArray)
    return newArray
}

array = [1, 2, 3, [4, 5]]
console.log(array.flat1())
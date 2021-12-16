Function.prototype.bind = function (obj, array) {
    return () => {
        return this.apply(obj, array)
    }
}
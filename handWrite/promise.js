function Promise2(func) {
    this.cbs = [];
    let resolve = (value) => {
        // resolve执行cbs中的函数必须加setTimeout
        // 否则resolve会在then之前执行，此时cbs是空的
        // 因为then还没有将包装好的回调函数放到cbs中
        setTimeout(() => {
            this.cbs.forEach(cb => cb(value))
        })
    }
    func(resolve)
}

Promise2.prototype.then = function (onResolved) {
    return new Promise2((resolve) => {
        this.cbs.push((value) => {
            const res = onResolved(value)
            if (res instanceof Promise2) {
                // 由用户决定什么时候执行then的resolve：
                // 把resovle作为用户定义的Promise.then的回调函数，包装后放到用户定义的promise的cbs中
                // 当用会定义的promise实例resolve时，执行cbs中的函数
                // 用户promise的resolve的参数会作为cbs中的函数的参数，也就是then的resolve的参数
                res.then(resolve)
            } else {
                resolve(res)
            }
        })
    })
}

// 1.执行传给promise的函数
// 2.如果指定了then，执行then：返回一个新的promise实例，并且将回调函数包装后放入cbs
// 3.等待传给promise的函数执行resolve(params)
// 4.执行resolve(params),也就是执行cbs中的包装函数，就会将then返回的Promise实例resolve
new Promise2(resolve => {
    resolve(2)
}).then((value) => {
    return new Promise2(resolve => {
        resolve(value)
    })
}).then(value => {
    console.log(value)
})
// 2

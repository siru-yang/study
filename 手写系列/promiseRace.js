Promise.prototype.myRace = function (args) {
    return new Promise((resolve, reject) => {
        for (let item of args) {
            Promise.resolve(item).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        }
    })
}
Promise.prototype.myAll = function (args) {
    return new Promise((resolve, reject) => {
        const result = []
        let index = 0
        let resolvedIndex = 0
        for (let item of args) {
            let resultIndex = index
            index += 1
            Promise.resolve(item).then(res => {
                result[resultIndex] = res
                resolvedIndex += 1
                if (resolvedIndex === index) {
                    resolve(result)
                }
            }).catch(error => {
                reject(error)
            })
        }
        if (index === 0) {
            resolve(result)
        }
    })
}
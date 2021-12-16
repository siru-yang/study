function test() {
    let list = [1, 2, 3]
    // list.forEach(item =>{
    //     console.log(item)
    //     if(item == 1){
    //         return true
    //     }
    // })
    // list.map(item =>{
    //     console.log(item)
    //     if(item == 1){
    //         return true
    //     }
    // })
    // for(let item of list){
    //     if(item == 1){
    //         return true
    //     }
    // }
    for (let i in list) {
        if (list[i] == 1) {
            return true
        }
    }

}

console.log(test())
console.log([3, 2, 1].sort((a, b) => { return (a - b) }))

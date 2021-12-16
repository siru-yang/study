// string = "abc"
// console.log(string[0])

// string += "12"
// console.log(string)


// for(let index of string){
//     console.log(index)
// }

// let i = 001
// let str = i.toString(2)
// let len = str.length
// for(let index = 0; index < 8 - len; index++){
//     str = '0' + str
// }
// console.log(str)

function test() {
    let list = '123'
    list.forEach(item =>{
        console.log(item)
        if(item == 1){
            return true
        }
    })
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
    // for(let i in list){
    //     if(list[i] == '1'){
    //         return true
    //     }
    // }

}

console.log(test())

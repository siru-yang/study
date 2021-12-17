// let obj = new Object()
// obj.new = 1
// for(let key in obj){
//     console.log(typeof key)
// }

let map = new Map()
map.set({1:1},2)
for(let item of  map){
    console.log(item)
    console.log(typeof item[0])
}
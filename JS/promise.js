// new Promise((resolve, reject) => {
//     setTimeout(resolve("promise"), 1000)
// }).then((value) => {
//     console.log("第一个then:", value)
//     // return Promise.resolve(value)
//     return new Promise(resolve => { resolve(value) })
// }).catch((value) => {
//     console.log("第一个catch:", value)
// }).then((value) => {
//     console.log("第二个then:", value)
// }).catch((value) => {
//     console.log("第二个catch:", value)
// })

// new Promise((resolve, reject) => {
//     new Promise(() => {
//         resolve(2)
//     })
// }).then(value => {
//     console.log(value)
// })
//2

new Promise(resolve => {
    setTimeout(() => resolve("2"), 2000)
}).then(value => {
    console.log(value)
})
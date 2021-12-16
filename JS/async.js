

async function asyncfun() {
    await new Promise((resolve) => {
        setTimeout(() => resolve(2), 2000);
    });
    console.log("hello")
}

asyncfun()

// function timeout(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }

// async function asyncPrint(value, ms) {
//     let v = await timeout(ms);
//     console.log(value, v);
// }

// asyncPrint('hello world', 2000);
console.log("end")
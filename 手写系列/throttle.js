var canRun = true
function throttle(delay) {
    if (!canRun) {
        return
    }
    canRun = false
    setTimeout(() => { console.log("节流"); canRun = true }, delay)
}

for(let i = 0; i < 100; i++){
    throttle(500)
}
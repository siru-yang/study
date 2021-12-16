var timeout = null
function debounce(delay) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
        console.log("防抖", new Date().getTime())
    }, delay)
}


for(let i = 0; i < 100; i++){
    debounce(500)
}
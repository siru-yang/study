function quickSort(array, begin, end) {
    if (begin >= end) {
        return
    }
    let pivot = begin
    let leftEnd = begin + 1
    for (let index = leftEnd; index <= end; index++) {
        if (array[index] < array[pivot]) {
            swap(array, index, leftEnd)
            leftEnd++
        }
    }
    swap(array, pivot, leftEnd - 1)
    console.log(array)
    quickSort(array, begin, leftEnd - 2)
    quickSort(array, leftEnd, end)
}


function swap(array, left, right) {
    let tmp = array[left]
    array[left] = array[right]
    array[right] = tmp
}

let array = [8, 7, 6, 5, 3, 9, 6, 7]
quickSort(array, 0, array.length - 1)
console.log(array)
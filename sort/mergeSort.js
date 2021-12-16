function mergeSort(array) {
    if (array.length < 2) {
        return array
    }
    let mid = Math.floor(array.length / 2)
    let leftArray = array.slice(0, mid)
    let rightArray = array.slice(mid)
    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(left, right){
    let result = []
    let p = 0;
    let q = 0;
    while(p < left.length && q < right.length){
        if(left[p] <= right[q]){
            result.push(left[p++])
        }else{
            result.push(right[q++])
        }
    }
    while(p < left.length){
        result.push(left[p++])
    }
    while(q < right.length){
        result.push(right[q++])
    }
    return result
}


let array = [8,7,6,5,3,9,6,7]
console.log(mergeSort(array))
let nums = [55,3,6,22,6,756,200,1000,900];
function quickSort(arr){
    if(arr.length<=0){
        return arr;
    }
    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>pivot){
            right.push(arr[i])
        }else if(arr[i]<pivot){
            left.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
console.log(quickSort(nums))
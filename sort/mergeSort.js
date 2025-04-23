

let arr = [64,543,22,5,623,6243];
function mergeSort(nums){
    if(nums.length<=1) return nums;
    let mid = Math.floor(nums.length/2);
    let left = nums.slice(0,mid);
    let right = nums.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    let sorted = [];
    while(left.length && right.length){
        if(left[0]>=right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())        }
    }
    return [...sorted,...left,...right]
}

console.log(mergeSort(arr))
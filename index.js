
const nums =  [5,7,7,8,8,10]
const target = 6
var search = function(nums, target) {
    if(!nums.length) return 0

    var left = 0
    var right = nums.length-1
    var middle

    while(left <= right){
        middle = Math.floor((right+left)/2)
        console.log('----',middle)
        if(target < nums[middle]){
            right = middle-1
        }else if(target > nums[middle]){
            left = middle + 1
        } else {
            break;
        }  
    }
    console.log('--middle--',middle)


    if( middle < 0 ){
        return 0
    }

    if(nums[middle]===target){
        left = middle
        right = middle
        while(nums[left]===target){
            left--
        }
        while(nums[right]===target){
            right++
        }
    }else{
        return -1
    }
    return right - left - 1
};

console.log(search(nums, target))
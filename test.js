
const nums = [5,7,7,8,8,10]
const target = 8

var search = function(nums, target) {
    if(!nums.length) return 0

    var left = 0
    var right = nums.length-1
    var middle =  Math.floor((nums.length-1) / 2) 

    while(left > right){
        if(target < nums[middle]){
            right = middle
        }else if(target > nums[middle]){
            left = middle
        }
        middle = Math.floor((right-left)/2)
    }
    console.log(middle)
    if(nums[middle]===target){
        left = middle
        right = middle

        while(nums[left]===target){
            left--
        }

        while(nums[right]===target){
            right++
        }
        return 0
    }
    return right - left
};

console.log(search(nums, target))
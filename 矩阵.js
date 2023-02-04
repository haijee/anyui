
const matrix= [[]]
const target = 0

var findNumberIn2DArray = function(matrix, target) {
    var len = matrix?.length;
    if(!len){
        return false
    }
    if(!matrix?.[0]?.length){
        return false
    }

    var j =  len - 1;
    var i = 0
    while(i < len && j>=0){
        if(matrix[j][i] < target){
            i++
        } else if(matrix[j][i] > target){
            j--
        } else {
           return true 
        }
    }
    return false  
};
console.log(findNumberIn2DArray(matrix, target))
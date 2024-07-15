function setsum(array) {
    let low = 0;
    let high = array.length - 1;
    while(low < high) {
        
        if(array[low] + array[high] > 0){
            high--;
        }
        else if(array[low] + array[high] < 0) {
            low++;
        }
        else if(array[low] + array[high] === 0){
            return [array[low],array[high]];
        }
    }
}
const result = setsum([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);
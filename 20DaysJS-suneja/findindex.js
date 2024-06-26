// find index of given number in array usingg binsary searrch method

function seachIndex(array,num) {
    let min = 0;
    let max = array.length -1;
    while(min <= max){
        let midIndex = Math.floor((min + max)/2);

        if(array[midIndex] < num) {
            min = midIndex + 1;
        }
        else if (array[midIndex] > num){
            
            max = midIndex-1;
        }
        else {
            midIndex;
        }  
    }
    return -1;
}

const result = seachIndex([1,2,3,4,5,6,7,],7);
console.log(result);
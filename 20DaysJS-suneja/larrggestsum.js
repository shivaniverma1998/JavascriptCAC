// count largest sum of consecutive digits
// given -->  [1,2,3,4,3,5,4,6,7,8] -- total elements - 10
// given -- number = 4
//  output - largest number

 function findlargestsum(array, number){
    if(number > array.length){
        throw new Error("number should be less the length of array")
    }
    let max = 0;
    for (let i = 0; i < array.length- number + 1 ; i++) {
        let temp = 0;
        for (let j = 0; j < number ; j++) {
            temp += array[i + j]
            
        }
        if(temp > max){
            max = temp;
        }
        
    }
    return max;
 }

 const result = findlargestsum([1,2,3,4,3,5,4,6,7,8],4);
 console.log(result);

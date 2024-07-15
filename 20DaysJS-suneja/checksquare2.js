

function checksquare(array1, array2){
    
    let map1 = {};
    let map2 = {};
    for(item1 of array1){ //oop n times
        map1[item1] = (map1[item1] || 0) + 1;
    }

    for(item1 of array2){ //loop n times
        map2[item1] = (map2[item1] || 0) + 1;
    }

    for(let key in map1){ // loop n times
        if(! map2[key * key]){
            return false;
        }
        if(map1[key] != map2[key * key]){
            return false;
        }
    }
return true;
}

const result = checksquare([1,2,4,2],[1,4,4,16]);
console.log(result);
//time compleaxiy - O(n +n +n) => O(3n) o O(n)

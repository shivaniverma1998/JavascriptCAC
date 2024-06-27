
let myarray= [2,3,1,4,9,8,6];
let mylist = [];
let i = 0;
let j = 1;
function issort(array){
    for (let i = 0; i < array.length; i++) {
        if(array[i] > array[i+1]){
            return false;
        }
         
    }
    return true;
}

function checksorting(array){
    if(issort(array)){
        mylist = array;
        return ;
    }
    else if(array[i] < array[j]){
            i++;
            j++;
            checksorting(array)
          }
        else{
            [array[i],array[j]]= [array[j],array[i]];
            i = 0;
            j = 1;
            checksorting(array);
        }

}

checksorting(myarray);
console.log(mylist);

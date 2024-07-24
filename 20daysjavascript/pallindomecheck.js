function ispal(str){

   let rev = str.split("").reverse().join("");   // we are using .join() that means it converts [ 'd', 'a', 'd' ] => d,a,d but we still get false we need to remove  comma(,) for that use .join("") now it will give true
//    console.log(rev);
   

   if(str.toLowerCase() === rev.toLowerCase()){
    return true;
   }
   else{
    return false;
   }
}
const select = ispal("dad");
console.log(select);

//WITHOUT USING PRE-DEFINED FUNCTION case 2
function ispal2(str){

    let newstr = str.toLowerCase();
    let left = 0;
    let right = newstr.length - 1;

    while(left < right){

        if(newstr[left] == newstr[right]) return false;

        left++;
        right--;
    }
    return true;
}

const res = ispal2("payal");
console.log("the result shows pallindrome or not ",res);
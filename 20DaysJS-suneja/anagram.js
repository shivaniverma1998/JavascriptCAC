//check anagram string
// "hello" -> "llohe" 

//what is anaggram tthe strings  witth same length but differentt arangemnent
 //condittion
 //length check (for both strings)
// strring : hello
 // {h:0,e:0,l:0,o:0}

 function anagram(string1,string2) {
    if(string1.length !== string2.length){
        return false;
    }
    let counter ={}
    for(let letter of string1){
        counter[letter] = (counter[letter]  || 0 ) +1;
        console.log(counter[letter]);
    }//

    for(let items of string2){
        if(!counter[items]){
            return false;
        }
        counter[items] -=1
    }
    return true;
 }
 const check = anagram('hello', 'llhie');
 console.log(check);
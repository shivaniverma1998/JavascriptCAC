function maxchar(str){

    const map = {};
    str.split("").forEach(element => {
        map[element] = map[element]? map[element]+1: 1;
    });
    let max = 1;
    char = str[0];
    for(let k in map){
        if( map[k] > max){
            console.log(map[k],"times");
            max = map[k];
            
            char = k;
        }
    }
    return console.log("maximum character",char);
}

const res = maxchar("shivaneeeey");
console.log(res);
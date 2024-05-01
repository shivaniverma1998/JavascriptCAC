const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
//FOR IN LOOP  : for in loop me keys ajaati hai iterate krke 

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log([key]);  // bas keys aayi hai
}
for (const key in programming) {
    console.log(programming[key]);   // values agyi
}

// const map = new Map() 
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key); // here we dont get anything in output as map is not iteratable
// }
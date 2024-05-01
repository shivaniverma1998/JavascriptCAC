//foreach loop
console.log("with the help of foreach (in it function)")
const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(val);
} )
console.log("************");
console.log("with help of arrow function")
coding.forEach( (item) => {
    console.log(item);
} )
console.log("************");
function printMe(item){
    console.log(item);
}
console.log("******ForEach(printme)******");
coding.forEach(printMe)

console.log("************");
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

console.log("******prniting object inside array name coding ******");
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
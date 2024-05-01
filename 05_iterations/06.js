const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    console.log(item);    return item
} )

console.log("********");
console.log(values); // iss wale foreach se return th undefine ayega 
   
//using filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("********filter() takes call back inside  Returns the elements of an array that meet the condition specified in a callback function.");
const newNums = myNums.filter( (num) =>  num > 5)
console.log(newNums)  // it returns acc to call


console.log("***we are using here {} which is the starting of scope so we have to use return keword here mandatory***")
const newNums1 = myNums.filter( (num) =>  {
    return num > 4
})
console.log(newNums1)

//*******Another type of method***********
//const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let userbooks = books.filter( (bk) => bk.genre === 'History')
  let userbooks1 = books.filter( (bk1) => { 
    return bk1.publish >= 1995 && bk1.genre ==='History'})
  console.log(userbooks);
  console.log(userbooks1);



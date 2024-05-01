// we are studying her econcept called "reduce"

const myNums = [1, 2, 3]
const mytotal = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval : ${currval}`);  // main motive to write this line is aaakhir acculumator me kya value ja rahi hai har baar
    return acc+currval
}, 0)
console.log(mytotal);

// lets use reduce by arrow function
 const myNums1 = [40, 50, 2]
const mytotal1 = myNums1.reduce( (acc, currval) => acc * currval,1)
console.log(mytotal1);

const shoppingCart = [
    {
        itemprice : "jscourse",
        price: 2999
    },
    {
        itemprice : "DSAcourse",
        price: 3000
    },
    {
        itemprice : "merncourse",
        price: 4800
    }
]
//check it out how we use "reduce" in array 

const pricetopay = shoppingCart.reduce((acc, item) => acc+item.price,0)
console.log(pricetopay);
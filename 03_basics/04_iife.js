// Immediately Invoked Function Expressions (IIFE)

// to avoid global scope ka pollution uske liye we use this type of call for function  ({functiondefinition})(execution call)  aesa kuch niche example hai

(function chai(){  // this is name iife
    console.log(`DB CONNECTED LINE`);
})(); // semicolon is used to end the invoked function so that we can start another invoked function vrna error aaati



//arrow function type

( (name) =>{   // this is unnamed iife
    console.log(`db connection second ${name}`)
} )('successfully')
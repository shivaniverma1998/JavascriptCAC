const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess =  [] ;//jo usne guess kiye
let numGuess = 1;

let playGame = true // condition where check limits full

// now write functions
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault() ; //dont take away values just keep it here
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })  
}

function validateGuess(guess){
    //number is valid number or not
    if(isNaN(guess)){
        alert('please enter the valid number');
    }else if(guess < 1){
        alert('please enter a number greater than 1');
    }else if(guess > 100){
        alert('please enter a number less than 100');
    }else{
        //if no is right oush it in array
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over... Random number was ${randomNumber}`);
            endGame();
        } else{
            displayGuess(guess);
            checkGuess(guess);
            
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
      displayMessage(`You guessed it right`);
      endGame();
    } else if (guess < randomNumber) {
      displayMessage(`Number is TOOO low`);
    } else if (guess > randomNumber) {
      displayMessage(`Number is TOOO High`);
    }
  }

function displayGuess(guess){
    //clean input value & update remainings  and array of prev guess
    userInput.value = ''
    guessSlot.innerHTML += `${guess} ,`;
    numGuess++;
    remaining.innerHTML = `${11-numGuess} `;
}

function displayMessage(guess){
    //to display messsage input by user
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    //
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">START new Game</h2>`
    startOver.appendChild(p); // append krliya paragrapgh
    playGame = false;
    newGame();

}

function mewGame(){
    //
}


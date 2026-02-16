let randomnum = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numguess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess<1){
        alert('Please enter a number greater than 1');
    }
    else if(guess>100){
        alert('Please enter a number less than 100');
    }
    else{
        prevGuess.push(guess);
        if(numguess === 11){
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${randomnum}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomnum){
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if(guess<randomnum){
        displayMessage(`Number is too low`);
    }
    else if(guess>randomnum){
        displayMessage(`Number is too high`);
    }
}

// clean guess
function displayGuess(guess){
    userInput,value = '';
    guessSlot.innerHTML += `${guess} `;
    numguess++;
    remaining.innerHTML = `${11 - numguess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame(){
    const newGamebut = document.querySelector('#newGame');
    newGamebut.addEventListener('click', function(e){
        randomnum = parseInt(Math.random()*100 + 1);
        prevGuess = [];
        numguess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numguess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        
        playGame = true;
    })
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}



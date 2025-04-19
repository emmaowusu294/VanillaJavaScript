let score = JSON.parse(localStorage.getItem('score')) || 
    {
        wins: 0,
        losses: 0,
        ties: 0
    };

        updateScoreElement();

// If score object doesn't exist in local storage, initialize it
/*
if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}
    */
function playGame(playerMove) {
    // Computer Picking a move
    const computerMove = pickComputerMove();

    // Comparing the computerMove against our move
    let result;
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You Lose';
        } else if (computerMove === 'paper') {
            result = 'You Win';
        } else if (computerMove === 'scissors') {
            result = 'Tie';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You Win';
        } else if (computerMove === 'paper') {
            result = 'Tie';
        } else if (computerMove === 'scissors') {
            result = 'You Lose';
        }
    } else {
        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You Lose';
        } else if (computerMove === 'scissors') {
            result = 'You Win';
        }
    }

    if (result === 'You Win') {
        score.wins++;
    } else if (result === 'You Lose') {
        score.losses++;
    } else if (result === 'Tie') {
        score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));


    
    updateScoreElement();
    
    document.querySelector('.js-result')
        .innerHTML = result;

    
    document.querySelector('.js-moves')
    .innerHTML = ` You
        <img class="move-icon" src="emojis/${playerMove}-emoji.png">
        <img class="move-icon" src="emojis/${computerMove}-emoji.png">
            Computer`;

    

//         alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties} `);
    }

let isAutoPlay = false;
let intervalId;

/*
function autoPlay() {
    if (!isAutoPlay) {
        intervalId = setInterval(function() {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000)
        isAutoPlay = true;
    } else {
        clearInterval(intervalId);
        isAutoPlay = false;
    }
   
}
*/


function autoPlay() {
    if (!isAutoPlay) {
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000)
        isAutoPlay = true;
    } else {
        clearInterval(intervalId);
        isAutoPlay = false;
    }
   
}


// Using addEventListener instead of the onclick
document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playGame('rock');
    });


document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playGame('paper');
    });


document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playGame('scissors');
    });

document.querySelector('.js-reset-button')
    .addEventListener('click', () => {
        resetScore();
    });


document.querySelector('.js-auto-button')
    .addEventListener('click', () => {
        autoPlay();
    });
  

    document.body.addEventListener('keydown', (event) => {
        // console.log(event.key);
        if(event.key === 'r'){
            playGame('rock');
        } else if (event.key === 'p') {
            playGame('paper');
        } else if (event.key === 's'){
            playGame('scissors');
        }
    });
function pickComputerMove() {
    // Computer Picking a move
    const randomNumber = Math.random();

    let computerMove;

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}

function resetScore() {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
    localStorage.setItem('score', JSON.stringify(score));
    // alert('Game was reset');

    //call the function to update the score on the page
    updateScoreElement();
}

   

   

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML =
            `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties} `;
}
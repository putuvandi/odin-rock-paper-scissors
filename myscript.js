function computerPlay() {
    const plays = ['rock', 'paper', 'scissors'];
    let play = Math.floor(Math.random() * 3);
    return plays[play];
    //console.log(plays[play]); 
}

let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {
    let result = [];
    let text = '';
    let gameStatus = true;

    if (playerWins < 5 && computerWins < 5) {
        if (playerSelection == 'rock') {
            if (computerSelection == 'paper') {
                text = 'You Lose! Paper beats Rock!';
                computerWins++;
                result.push(playerWins,computerWins,text);
            } else if (computerSelection == 'scissors') {
                text = 'You Win! Rock beats Scissors';
                playerWins++;
                result.push(playerWins,computerWins,text);
            } else {
                text = 'Draw! Both of you chose Rock';
                result.push(playerWins,computerWins,text);
            }
        } else if (playerSelection == 'paper') {
            if (computerSelection == 'scissors') {
                text = 'You Lose! Scissors beats Paper!';
                computerWins++;
                result.push(playerWins,computerWins,text);
            } else if (computerSelection == 'rock') {
                text = 'You Win! Paper beats Rock';
                playerWins++;
                result.push(playerWins,computerWins,text);
            } else {
                text = 'Draw! Both of you chose Paper';
                result.push(playerWins,computerWins,text);
            }
        } else {
            if (computerSelection == 'rock') {
                text = 'You Lose! Rock beats Scissors!';
                computerWins++;
                result.push(playerWins,computerWins,text);
            } else if (computerSelection == 'paper') {
                text = 'You Win! Scissors beats Paper';
                playerWins++;
                result.push(playerWins,computerWins,text);
            } else {
                text = 'Draw! Both of you chose Scissors';
                result.push(playerWins,computerWins,text);
            }
        }
    } else {
        gameStatus = false;
        if (playerWins === 5) {
            text = 'Game Ended! Player wins!';
        } else {
            text = 'Game Ended! Computer wins!';
        }
        result.push(playerWins,computerWins,text);
    }

    const score1 = document.querySelector('.score-1');
    const score2 = document.querySelector('.score-2');
    const textResults = document.querySelector('.text-results');

    const playerScore = document.createElement('div');
    const compScore = document.createElement('div');
    const textResult1 = document.createElement('div');
    console.log(score1.childElementCount);

    if (score1.childElementCount === 2) {
        score1.removeChild(score1.lastChild);
        score2.removeChild(score2.lastChild);
        textResults.removeChild(textResults.lastChild);

        playerScore.classList.add('player-score');
        playerScore.textContent = result[0];
        score1.appendChild(playerScore);

        compScore.classList.add('comp-score');
        compScore.textContent = result[1];
        score2.appendChild(compScore);

        textResult1.classList.add('text-result-1');
        textResult1.textContent = result[2];
        textResults.appendChild(textResult1);
    } else {
        playerScore.classList.add('player-score');
        playerScore.textContent = result[0];
        score1.appendChild(playerScore);

        compScore.classList.add('comp-score');
        compScore.textContent = result[1];
        score2.appendChild(compScore);

        textResult1.classList.add('text-result-1');
        textResult1.textContent = result[2];
        textResults.appendChild(textResult1);
    }
}

function pleaseWork() {
    playRound(this.value, computerPlay());
}

const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', pleaseWork));




// function game() {

//     for (let i=1; i <= 5; i++) {
//         let playerInput = prompt('Please type your move?');
//         let playerPlay = playerInput.toLowerCase();
//         let rs = playRound(playerPlay, computerPlay());
//         console.log(rs[1]);
//         console.log('Wins: ', rs[0]);
//         console.log(`----------------end of game`,i,`---------------------`);
//     }
// }

// game();


function computerPlay() {
    const plays = ['rock', 'paper', 'scissors'];
    let play = Math.floor(Math.random() * 3);
    return plays[play];
    //console.log(plays[play]); 
}

let win = 0;

function playRound(playerSelection, computerSelection) {
    let result = [];
    let text = '';

    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            text = 'You Lose! Paper beats Rock!';
            result.push(win,text);
        } else if (computerSelection == 'scissors') {
            text = 'You Win! Rock beats Scissors';
            win++;
            result.push(win,text);
        } else {
            text = 'Draw! Both of you chose Rock';
            result.push(win,text);
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            text = 'You Lose! Scissors beats Paper!';
            result.push(win,text);
        } else if (computerSelection == 'rock') {
            text = 'You Win! Paper beats Rock';
            win++;
            result.push(win,text);
        } else {
            text = 'Draw! Both of you chose Paper';
            result.push(win,text);
        }
    } else {
        if (computerSelection == 'rock') {
            text = 'You Lose! Rock beats Scissors!';
            result.push(win,text);
        } else if (computerSelection == 'paper') {
            text = 'You Win! Scissors beats Paper';
            win++;
            result.push(win,text);
        } else {
            text = 'Draw! Both of you chose Scissors';
            result.push(win,text);
        }
    }

    return result;
}

function game() {

    for (let i=1; i <= 5; i++) {
        let playerInput = prompt('Please type your move?');
        let playerPlay = playerInput.toLowerCase();
        let rs = playRound(playerPlay, computerPlay());
        console.log(rs[1]);
        console.log('Wins: ', rs[0]);
        console.log(`----------------end of game`,i,`---------------------`);
    }
}

game();


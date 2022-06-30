

// program to get a random item from an array

function computerPlay() {

    const array = ["Rock", 'Papers', 'Scissors'];

    // get random index value
    const randomIndex = Math.floor(Math.random() * array.length);

    // get random item
    const item = array[randomIndex];

    return item;
}


function playRound(a,b){
    let result;
    a = a.toLowerCase();
    b = b.toLowerCase();

    if (a === b){
        result ="It's a tie!";
        }
    else if ( (a === "rock" ) && b ==="scissors") {
            result = "You win!";
          }
    else if ( (a === "scissors" ) && b ==="paper") {
            result = "You win!";
          }
    else if ( (a === "paper" ) && b ==="rock") {
        result = "You win!";
          }
          else{ result = "You Lose!"}

          return result;      
}

function game() {
    let computerscore = 0;
    let playerscore = 0;

 for (let i = 0; i < 5; i++) {

    let ps = prompt("What's your choice?");
    computerSelection = computerPlay();

    result = playRound(ps,computerSelection);
    console.log(computerSelection);

    if (result === "You win!"){
        playerscore += 1
    }
    else if (result === "You Lose!"){
        computerscore += 1
    }
 }

 if ( playerscore > computerscore){
    return "player wins. player vs computer score is " + playerscore + " vs " + computerscore;
 }
 else if ( playerscore < computerscore){
    return "Computer wins. player vs computer score is " + playerscore + " vs " + computerscore;
 }
 else { return "It's a Tie. player vs computer score is " + playerscore + " vs " + computerscore;}

}




console.log(game());


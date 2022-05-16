var playerPoints = 0;
var computerPoints = 0;

function computerPlay(){
    var rndSwitchNum = Math.floor(Math.random() * 3);
    console.log(rndSwitchNum);

    switch(rndSwitchNum){
        case 0:
            return "paper"
        case 1:
            return "scissors"
        case 2:
            return "rock";
}
};

function playRound(playerSelection, computerSelection){

switch(playerSelection.toLowerCase()){
    case "paper":
        switch(computerSelection){
            case "paper":
                return "draw";
            case "scissors":
                computerPoints++;
                return "computer wins";
            case "rock":
                playerPoints++;
                return "player wins";
        };
        break;
    case "scissors":
        switch(computerSelection){
            case "paper":
                playerPoints++;
                return "player wins";
            case "scissors":
                return "draw";
            case "rock":
                computerPoints++;
                return "computer wins";
        };
        break;
    case "rock":
        switch(computerSelection){
            case "paper":
                computerPoints++;
                return "computer wins";
            case "scissors":
                playerPoints++;
                return "player wins";
            case "rock":
                return "draw";
        };
        break;
    default:
        return "round invalid"
}
};

function game(){
    playerPoints = 0;
    computerPoints = 0;

for (let i = 0; i < 5; i++){
    var playerSelect = prompt("round " + (i + 1));
    playRound(playerSelect, computerPlay());
}

if (Math.max(playerPoints, computerPoints) == playerPoints){
    console.log("player wins!")
} else if (Math.max(playerPoints, computerPoints) == computerPoints) {
    console.log("computer wins!")
} else if (playerPoints == computerPoints){
    console.log("it's a draw!")
} else {
    return;
}
};

console.log(game());
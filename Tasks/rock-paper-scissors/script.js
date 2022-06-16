function computerPlay()
{
    let a = Math.floor(Math.random()*3)
    let move = ["rock","paper","scissors"]

    return move[a]
}

function playRound(playerSelection,computerSelection)
{
    let player = playerSelection.toLowerCase();

    if(player == computerSelection)
    {
        return 0
    }
    else if((player == "rock" && computerSelection == "paper") || (player == "paper" && computerSelection == "scissors") || (player == "scissors" && computerSelection == "rock"))
    {
        return -1
    }
    else
    {
        return 1
    }
    
}

function game()
{
    for(let i = 0; i<5; i++)
    {
        let scorePlayer = 0

        for(let i = 0; i<5; i++)
        {   
            let player = prompt("Input your move: ").toLowerCase()
            if(player == "" || player != "rock" || player != "scissor" || player != "paper") return "Please chose a valid move"
            let computer = computerPlay()
            scorePlayer = scorePlayer + playRound(player,computer)
        }

        if(scorePlayer == 0)
        {
            return "Draw."
        }
        else if(scorePlayer > 0)
        {
            return "You win. :D"
        }
        else
        {
            return "You lose!"
        }
    }
}

console.log(game())
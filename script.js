
function getComputerChoice(){
    let x = Math.random()*100
    if( x >= 67){
        return "scissors"
    }else if(x >= 34){
        return "paper"
    }else {
        return "rock"
    }

}

function getHumanChoice(){
    let human = +prompt("rock? =1 paper? =2 scissors? =3")
    if(human == 1){
        return "rock"
    }else if(human == 2){
        return "paper"
    }else if(human == 3){
        return "scissors"
    }
}

function playRound(){
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    console.log(computerChoice)

    if(humanChoice == computerChoice ){
        console.log("Tie! no one wins.")
        
    }else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("you lose! paper beats rock")
        computerScore++
    }else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("you win! paper beats rock")
        humanScore++
    }else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("you lose! rock beats scissors" )
        computerScore++
    }else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("you win! rock beats scissors" )
        humanScore++
    }else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("you lose! scissors beats paper" )
        computerScore++
    }else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("you win! scissors beats paper" )
        humanScore++
    }
}

function playGame(){
    let n = +prompt("how many rounds")
    humanScore = 0
    computerScore = 0
    for (let i=1 ; i<= n;i++){
        playRound()
    }
    if(humanScore > computerScore){
        console.log(`you win by the socre of ${humanScore} to ${computerScore}`)
    }else if(humanScore < computerScore){
        console.log(`you lose by the socre of ${humanScore} to ${computerScore}`)
    }else {
        console.log(`you tie by the socre of ${humanScore} to ${computerScore}`)
    }
}

let humanScore
let computerScore


playGame()







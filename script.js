
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

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const playerselection = document.querySelector("#playerselection")
const roundresult = document.querySelector("#roundresult")
const livescore = document.querySelector("#livescore")
const allresult = document.querySelector("#allresult")

    let human
    rock.addEventListener("click", (event)=>{
      human = "rock"
      playerselection.textContent = `you chose rock`
    })
    paper.addEventListener("click", (event)=>{
      human = "paper"
      playerselection.textContent = `you chose paper`
    })
    scissors.addEventListener("click", (event)=>{
      human = "scissors"
      playerselection.textContent = `you chose scissors`
    })

    function getHumanChoice(){
      return human
    }


    let humanScore=0
    let computerScore=0

playround.addEventListener("click" , (event)=>{
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()

    if(humanChoice == computerChoice ){
        roundresult.textContent="Tie! no one wins."
        livescore.textContent=`the Score is ${humanScore} - ${computerScore}`
    }else if(humanChoice == "rock" && computerChoice == "paper"){
        roundresult.textContent="you lose! paper beats rock"
        computerScore++
        livescore.textContent=`the Score is ${humanScore} - ${computerScore}`
    }else if(humanChoice == "paper" && computerChoice == "rock"){
        roundresult.textContent="you win! paper beats rock"
        humanScore++
        livescore.textContent=`the Score is ${humanScore} - ${computerScore}`
    }else if(humanChoice == "scissors" && computerChoice == "rock"){
        roundresult.textContent="you lose! rock beats scissors"
        computerScore++
        livescore.textContent=`the Score is ${humanScore} - ${computerScore}`
    }else if(humanChoice == "rock" && computerChoice == "scissors"){
        roundresult.textContent="you win! rock beats scissors"
        humanScore++
        livescore.textContent=`the Score is ${humanScore} - ${computerScore}`
    }else if(humanChoice == "paper" && computerChoice == "scissors"){
        roundresult.textContent="you lose! scissors beats paper"
        computerScore++
        livescore.textContent=`the Score is ${humanScore} - ${computerScore}`
    }else if(humanChoice == "scissors" && computerChoice == "paper"){
        roundresult.textContent="you win! scissors beats paper"
        humanScore++
        livescore.textContent=`the Score is ${humanScore} - ${computerScore}`
    }
    if(humanScore == 5){
      allresult.textContent="you are the winner!!!"
      humanScore = 0
      computerScore = 0
    }else if(computerScore == 5){
      allresult.textContent="you lost to a computer :("
      humanScore = 0
      computerScore = 0
    }
}) 














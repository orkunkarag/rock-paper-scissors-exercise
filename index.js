import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

let playerSelection = "Rock";

//DOM Manipulation
const app = document.querySelector("#app");

const playerChoice = document.createElement("div");
playerChoice.classList.add("playerChoice");
playerChoice.textContent = "Player Choice";
playerChoice.style.cssText = "color: white; background-color: grey";
app.appendChild(playerChoice);

//DOM Player Choice Boxes
const rock = document.querySelector("#rock-button");
rock.addEventListener('click', () => alert("Player choice: Rock"));

const paper = document.querySelector("#paper-button");
paper.addEventListener('click', () => alert("Player choice: Paper"));

const scissors = document.querySelector("#scissors-button");
scissors.addEventListener('click', () => alert("Player choice: Scissors"));


//Computer Play Function
function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  let computerChoice = choices[Math.floor(Math.random()*choices.length)];
  return computerChoice;
}

//Round Play Function
function playRound(playerChose, computerSelection) {
  computerSelection = computerPlay();
  playerChose = playerSelection;
  if (playerChose === "Rock") {
    if (computerSelection === "Rock") {
      console.log("You are even.");
    } else if (computerSelection === "Paper") {
      console.log("Computer beats Player.");
    } else {
      console.log("Player beats Computer.");
    }
  } else if (playerChose === "Paper") {
    if (computerSelection === "Paper") {
      console.log("You are even.");
    } else if (computerSelection === "Scissors") {
      console.log("Computer beats Player.");
    } else {
      console.log("Player beats Computer.");
    }
  } else if (playerChose === "Scissors") {
    if (computerSelection === "Scissors") {
      console.log("You are even.");
    } else if (computerSelection === "Rock") {
      console.log("Computer beats Player.");
    } else {
      console.log("Player beats Computer.");
    }
  } else {
    console.log("You have a wrong input");
  }
}

console.log(playRound());

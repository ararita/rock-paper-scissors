const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  //start the game:
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const matchScreen = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      matchScreen.classList.add("fadeIn");
    });
  };

  // play match:
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    //remove animation so that it can start again for every new click:
    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    //computer options:
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        console.log(this);
        //computer choice:
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //call the compare hands function
          compareHands(this.textContent, computerChoice);

          //update images:
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        //animation:
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScoreElement = document.querySelector(".player-score p");
    const computerScoreElement = document.querySelector(".computer-score p");

    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");

    if (playerChoice === computerChoice) {
      winner.textContent = "It's a tie";
      return;
    }
    //check the rock option:
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Congrats, you won!";
        playerScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Sorry, you lost!";
        computerScore++;
        updateScore();
        return;
      }
    }

    //check the paper option:
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Sorry, you lost!";
        computerScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Congrats, you won!";
        playerScore++;
        updateScore();
        return;
      }
    }

    //check for scissors option:
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Sorry, you lost!";
        computerScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Congrats, you won!";
        playerScore++;
        updateScore();
        return;
      }
    }
  };

  startGame();
  playMatch();
};
game();

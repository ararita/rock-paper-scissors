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
  };
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");

  //computer options:
  const computerOptions = ["rock", "paper", "scissors"];
  const computerNumber = Math.floor(Math.random() * 3);
  options.addEventListener("click", () => {
    computerOptions[computerNumber];
  });

  startGame();
  playMatch();
};
game();

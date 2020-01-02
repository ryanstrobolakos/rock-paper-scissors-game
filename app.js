const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  const startGame = () => {
    const playButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        compareHands(this.textContent, computerChoice);

        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;
      });
    });
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie.";
      return;
    }

    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        return;
      } else {
        winner.textContent = "Computer Wins";
        return;
      }
    }

    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        return;
      } else {
        winner.textContent = "Player Wins";
        return;
      }
    }

    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        return;
      } else {
        winner.textContent = "Player Wins";
        return;
      }
    }
  };

  startGame();
  playMatch();
};

game();

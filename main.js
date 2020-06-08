let min = 1,
  max = 10,
  winingNumber = randNumber(),
  guessLeft = 3;

const minInput = document.querySelector(".min-class"),
  game = document.querySelector("#game"),
  maxInput = document.querySelector(".max-class"),
  guessButton = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  mssg = document.querySelector(".message"),
  cont = document.querySelector(".container");

minInput.textContent = min;
maxInput.textContent = max;

game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});
guessButton.addEventListener("click", function () {
  let guessNumber = parseInt(guessInput.value);

  if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 10) {
    message(`please enter a valid number from ${min} to ${max}`, "red");
  } else {
    if (guessNumber === winingNumber) {
      gameOver(true, " Hurrah ! you win...... 😎😎  ");
    } else {
      guessLeft -= 1;
      if (guessLeft > 0) {
        message(
          `Unfortunately your answer ${guessNumber} is wrong 😥. You have ${guessLeft} guess left
          keep trying .........................\n
          Remember Hope is the best thing`,
          "red"
        );
        guessInput.value = " ";
      } else {
        gameOver(
          false,
          `Sorry You Lost !!! try again 😊 , The correct answer was ${winingNumber}`
        );
      }
    }
  }
});

function message(msg, color) {
  mssg.textContent = msg;
  mssg.style.color = color;
}

function gameOver(val, msg) {
  let color = "yellow";
  if (val == true) {
    color = "white";
  } else {
    color = "cyan";
  }
  message(msg, color);
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  guessButton.style.borderColor = color;
  playAgain();
}

function randNumber() {
  let x = Math.floor(Math.random() * (max - min + 1) + min);
  return x;
}

function playAgain() {
  guessButton.value = "Play Again";
  guessButton.style.borderColor = "purple";
  guessButton.className += "play-again";
  cont.style.backgroundColor = "lightgreen";
  head.style.color = "green";
}

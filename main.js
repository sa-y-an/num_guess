let min = 1,
  max = 10,
  winingNumber = 7,
  guessLeft = 3;

const minInput = document.querySelector(".min-class"),
  game = document.querySelector("#game"),
  maxInput = document.querySelector(".max-class"),
  guessButton = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  mssg = document.querySelector(".message");

minInput.textContent = min;
maxInput.textContent = max;

guessButton.addEventListener("click", function () {
  let guessNumber = parseInt(guessInput.value);

  if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 10) {
    message(`please enter a valid number between ${min} and ${max}`, "red");
  } else {
  }
});

function message(msg, color) {
  mssg.textContent = msg;
  mssg.style.color = color;
}

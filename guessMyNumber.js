let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector("body").style.backgroundColor = "red";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = "10";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = " ";
});

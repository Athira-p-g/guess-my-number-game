let secertNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let message = document.querySelector(".message");
document.querySelector(".score").textContent = score;
document.querySelector(".highscore").textContent = highScore;
console.log(secertNumber);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    message.textContent = "No number";
  } else if (guess === secertNumber) {
    message.textContent = "correct number";
    document.querySelector(".number").textContent = secertNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secertNumber) {
    if (score > 0) {
      message.textContent = "too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "Ypu lost the game";
    }
  } else if (guess < secertNumber) {
    if (score > 0) {
      message.textContent = "too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You lost the game";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secertNumber = Math.trunc(Math.random() * 20) + 1;
  console.log("puthiya mukam " + secertNumber);
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  message.textContent = "Start guessing...";
});

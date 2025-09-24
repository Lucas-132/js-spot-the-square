import {
  score,
  allTheBox,
  currentBox,
  randomizeBox,
  mode,
  highscoreDisplayer,
  initializeHighscore,
  updateHighscore,
} from "./setup.js";

export function survivalMode() {
  let survivalTime = 3;
  const minTime = 1;
  const timeDecrease = 0.2;
  let currentTimeout = null;
  let currentInterval = null;
  let gameOver = false;
  let lives = 3;
  let roundStart = null;

  score.textContent = "0";

  const countdownValue = document.querySelector("#countdown .countdown-value");
  const startButton = document.getElementById("start-button");

  function updateCountdownDisplay() {
    if (!roundStart) return;
    const elapsed = (Date.now() - roundStart) / 1000;
    const remaining = Math.max(0, survivalTime - elapsed);
    countdownValue.textContent = `${remaining.toFixed(2)}s | Vies : ${lives}`;
  }

  function nextRound() {
    if (gameOver) return;

    randomizeBox();
    roundStart = Date.now();
    countdownValue.textContent = `${survivalTime.toFixed(2)}s | Vies : ${lives}`;

    if (currentTimeout) clearTimeout(currentTimeout);
    if (currentInterval) clearInterval(currentInterval);
    // definit un timeout : si le joueur ne clique pas a temps, il perd une vie
    currentTimeout = setTimeout(() => {
      loseLife();
    }, survivalTime * 1000);
    // met a jour l'affichage tt les 100 ms
    currentInterval = setInterval(() => {
      updateCountdownDisplay();
    }, 100);
  }

  function loseLife() {
    lives--;
    if (currentInterval) clearInterval(currentInterval);
    if (lives <= 0) {
      endSurvival();
    } else {
      countdownValue.textContent = `${survivalTime.toFixed(2)}s | Vies : ${lives}`;
      nextRound();
    }
  }

  function endSurvival() {
    gameOver = true;
    if (currentInterval) clearInterval(currentInterval);
    countdownValue.textContent = "Perdu !";

    // afficher et configurer le bouton "Rejouer"
    startButton.style.display = "inline-block";
    startButton.textContent = "Rejouer";

    // supprimer anciens listeners
    const newButton = startButton.cloneNode(true);
    startButton.replaceWith(newButton);

    newButton.addEventListener("click", () => window.location.reload());
  }

  // gestion des clics sur les cases
  for (let box of allTheBox) {
    box.onclick = (e) => {
      if (gameOver) return;

      if (e.target.id === currentBox) {
        if (currentInterval) clearInterval(currentInterval);

        score.textContent = parseInt(score.textContent) + 1;
        survivalTime = Math.max(minTime, survivalTime - timeDecrease);
        updateHighscore(mode);
        nextRound();
      } else {
        loseLife();
      }
    };
  }
  // lance le premier round automatiquement
  nextRound();
}

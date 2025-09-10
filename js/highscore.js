export const highscoreDisplayer = document.getElementById("best-score-number");
export let currentScore = 0;

export function initializeHighscore() {
  if (!sessionStorage.getItem("highscore1Min")) {
    sessionStorage.setItem("highscore1Min", "0");
  }
  if (!sessionStorage.getItem("highscore2Min")) {
    sessionStorage.setItem("highscore2Min", "0");
  }
  if (!sessionStorage.getItem("highscore1Survival")) {
    sessionStorage.setItem("highscore1Survival", "0");
  }
}

export function updateHighscore(selectedHighscore, currentScore) {
  if (currentScore > selectedHighscore) {
    selectedHighscore = currentScore;
    highscoreDisplayer.innerHTML = selectedHighscore;
  }
}

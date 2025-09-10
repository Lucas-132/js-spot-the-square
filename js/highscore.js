import {score} from "./setup.js";

export const highscoreDisplayer = document.getElementById("best-score-number");

export function initializeHighscore(){
    if (!sessionStorage.getItem('highscore1Min')){
        sessionStorage.setItem('highscore1Min','0');
    }
    if (!sessionStorage.getItem('highscore2Min')){
        sessionStorage.setItem('highscore2Min','0');
    }
    if (!sessionStorage.getItem('highscore1Survival')){
        sessionStorage.setItem('highscore1Survival','0');
    }
}

export function updateHighscore(mode){
    switch(mode){
        case "1":
            if (parseInt(score.innerHTML)> parseInt(sessionStorage.highscore1Min)){
                sessionStorage.highscore1Min = score.innerHTML;
                highscoreDisplayer.innerHTML = sessionStorage.highscore1Min
            }
        case "2":
            if (parseInt(score.innerHTML)> parseInt(sessionStorage.highscore2Min)){
                sessionStorage.highscore2Min = score.innerHTML;
                highscoreDisplayer.innerHTML = sessionStorage.highscore2Min
            }
        case "survival":
            if (parseInt(score.innerHTML)> parseInt(sessionStorage.highscoreSurvival)){
                sessionStorage.highscoreSurvival = score.innerHTML;
                highscoreDisplayer.innerHTML = sessionStorage.highscoreSurvival
            }
    }
}
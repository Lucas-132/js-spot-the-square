const randomizedBox = document.getElementById("randomized-box");
let currentBox = "a1";

function randomizeBox() {
  const letters = "abcdefgh".split("");
  const numbers = "123456789".split("");
  let result = "";

  result += letters[Math.floor(Math.random() * 8)]; // Le 8 vient qu'il y a 8 lignes et 8 colones
  result += numbers[Math.floor(Math.random() * 8)];

  randomizedBox.innerHTML = result;
  currentBox = result;
  return result;
}

export{
  randomizedBox,
  currentBox,
  randomizeBox
}
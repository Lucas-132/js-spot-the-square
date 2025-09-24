const randomizedBox = document.getElementById("randomized-box");
let currentBox = "a1";

function randomizeBox() {
  let letters = "abcdefgh".split("");
  let numbers = "123456789".split("");
  let result = "";

  result += letters[Math.floor(Math.random() * 8)];
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
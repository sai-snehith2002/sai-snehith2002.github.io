// Simple typing effect for subtitle
const subtitle = document.querySelector("p");
const text = subtitle.innerText;
let index = 0;

subtitle.innerText = "";

function typeEffect() {
  if (index < text.length) {
    subtitle.innerText += text.charAt(index);
    index++;
    setTimeout(typeEffect, 60);
  }
}

window.addEventListener("load", typeEffect);

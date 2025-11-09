
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("loading-animation").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("loading-animation").style.display = "none";
    }, 400);
  }, 2500); 
});

const text = "manal chaudhry";
const element = document.getElementById("typed-name");

element.textContent = "";
let i = 0;
let blinkStart = false;

setTimeout(function type(timestamp) {
  if (i < text.length) {
    element.textContent += text[i];
    i++;
    const delay = 120;
    setTimeout(() => requestAnimationFrame(type), delay);

  } else if (!blinkStart) {
    element.classList.add("blink");
    blinkStart = true;
  }
}, 2500);
type();

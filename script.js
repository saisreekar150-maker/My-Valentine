const params = new URLSearchParams(window.location.search);
const from = params.get("from") || "Someone";
const to = params.get("to") || "You";

document.getElementById("question").innerText =
  `${to}, will you be my Valentine?`;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const hint = document.getElementById("hint");

/* YES button blinking when page loads */
yesBtn.classList.add("blink");

/* NO button runs away */
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
  hint.innerText = `"Yes" catch me `🥳;
});

/* YES click */
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="card">
      <img src="pic.png" class="result-img">
      <h1 class="WIfi mode on">! 💖</h1>
      <p>${from} will be happy!</p>
    </div>
  `;
});

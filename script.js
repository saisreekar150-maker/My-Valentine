const params = new URLSearchParams(window.location.search);
const from = params.get("from") || "sree😊laha";
const to = params.get("to") || "You";

document.getElementById("question").innerText =
  `${to}, will you be my Valentine?`;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const hint = document.getElementById("hint");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="card">
      <img src="pic.png" class="result-img">
      <h1 class="yay">Yay! 💖</h1>
      <p>${from} will be forever</p>
    </div>
  `;
});


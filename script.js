const params = new URLSearchParams(window.location.search);
const from = params.get("from") || "sree😊laha";
const to = params.get("to") || "You";

document.getElementById("question").innerText =
  `${to}, will you be my Valentine?`;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const hint = document.getElementById("hint");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
  hint.innerText = `"No" seems a bit shy 😈`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="card">
      <img src="pic.png" class="result-img">
      <h1 class="yay">Yay! 💖</h1>
      <p>${from} will be forever!</p>
    </div>
  `;
});

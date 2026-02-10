const params = new URLSearchParams(window.location.search);
const from = params.get("from") || "Someone";
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
  hint.innerText = `"No" will you join life with me 😈`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="card">
      <img src="https://i.imgur.com/Q9BGTuy.png" class="cat">
      <h1>Yay! 💖</h1>
      <p>${from} will be so happy!</p>
    </div>
  `;
});

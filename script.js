const yesBtn = document.getElementById("yesBtn");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

yesBtn.addEventListener("click", () => {
  page1.style.display = "none";
  page2.style.display = "flex";

  // After 2 seconds → final page
  setTimeout(() => {
    page2.style.display = "none";
    page3.style.display = "flex";
  }, 2000);
});

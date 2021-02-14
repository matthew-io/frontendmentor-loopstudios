let navBtn = document.getElementById("navIcon");
let navClose = document.getElementById("navClose");
let navMenu = document.getElementById("navMenu");
let hideThese = document.getElementById("hideThese");

navBtn.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
  hideThese.classList.add("hidden");
});

navClose.addEventListener("click", () => {
  navMenu.classList.add("hidden");
  hideThese.classList.remove("hidden");
});

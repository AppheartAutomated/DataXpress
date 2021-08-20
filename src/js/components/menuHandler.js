const MenuHandler = document.querySelector(".menuHandler");

function closeNav(e) {
  document.querySelector("nav").classList.toggle("active");
  MenuHandler.classList.toggle("active");
}

MenuHandler.addEventListener("click", (e) => {
  e.preventDefault;
  closeNav();
});

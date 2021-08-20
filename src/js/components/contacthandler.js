const contactHandler = document.querySelector(".contactHandler"),
  contactOptions = document.querySelectorAll(".contact-option");

function showContact() {
  document.querySelector(".contact-wrapper").classList.toggle("active");
  contactHandler.classList.toggle("active");
}

contactHandler.addEventListener("click", (e) => {
  e.preventDefault;
  showContact();
});

contactOptions.forEach((contactOption) => {
  contactOption.addEventListener("click", (e) => {
    contactOptions.forEach((contactOption) => {
      contactOption.classList.remove("active");
    });
    contactOption.classList.add("active");
  });
});

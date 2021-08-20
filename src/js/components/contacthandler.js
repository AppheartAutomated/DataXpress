const contactHandler = document.querySelector(".contactHandler"),
  contactOptions = document.querySelectorAll(".contact-option"),
  contactOptionResponses = document.querySelectorAll(
    ".contact .contact-content"
  );

function showContact() {
  document.querySelector(".contact-wrapper").classList.toggle("active");
  contactHandler.classList.toggle("active");
}

contactHandler.addEventListener("click", (e) => {
  e.preventDefault;
  showContact();
});

for (let i = 0; i < contactOptions.length; i++) {
  contactOptions[i].addEventListener("click", function () {
    for (let j = 0; j < contactOptions.length; j++) {
      contactOptions[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-option");

    for (let k = 0; k < contactOptionResponses.length; k++) {
      contactOptionResponses[k].classList.remove("active");
      contactOptionResponses[k].classList.add("hide");

      if (contactOptionResponses[k].getAttribute("data-response") == dataFilter) {
        contactOptionResponses[k].classList.remove("hide");
        contactOptionResponses[k].classList.add("active");
      }
    }
  });
}

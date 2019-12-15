(function() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".page-navigation__items");
  const links = document.querySelectorAll(".page-navigation__title");

  const contactForm = document.querySelector(".form");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(contactForm);

    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
  });

  burger.addEventListener("click", () => {
    nav.classList.toggle("page-navigation__active");

    burger.classList.toggle("toggle");
  });

  links.forEach(item => {
    item.addEventListener("click", event => {
      nav.classList.remove("page-navigation__active");
      burger.classList.remove("toggle");
    });
  });

  const concerts = document.querySelector("#concerts");
  concerts.addEventListener("click", e => {
    if (e.target.classList.contains("button")) {
      const buyTicketButton = e.target;
      const haveFunText = document.createElement("p");
      haveFunText.textContent = "Have fun!";

      const buttonContainer = buyTicketButton.parentElement;
      buttonContainer.insertBefore(haveFunText, buyTicketButton);
      buyTicketButton.remove();
    }
  });

  let image = document.querySelectorAll(".gallery__item > .concerts__image");
  image.forEach(item => {
    item.addEventListener("mouseleave", event => {
      event.target.style.filter = "sepia(1)";
    });
  });
})();

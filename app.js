(function() {
  document.addEventListener("DOMContentLoaded", function() {
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

    const buttonHolders = document.querySelectorAll(".button__holder");
    buttonHolders.forEach(holder => {
      const childButton = holder.querySelector("button");

      childButton.addEventListener("click", function() {
        holder.classList.add("button__off");
      });
    });

    links.forEach(item => {
      item.addEventListener("click", event => {
        nav.classList.remove("page-navigation__active");
        burger.classList.remove("toggle");
      });
    });
  });
})();

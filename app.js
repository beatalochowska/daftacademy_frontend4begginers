(function() {
  document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".page-navigation__items");
    const navItems = document.querySelectorAll(".page-navigation__item");
    const buyButtons = document.querySelectorAll(".button");

    const invisibleBurger = event => {
      event.target.style.display = "none";
    };

    burger.addEventListener("click", () => {
      nav.classList.toggle("page-navigation__active");

      navItems.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navFade 1s ease forwards ${index / 4 + 0.5}s`;
        }
      });

      burger.classList.toggle("toggle");
    });

    buyButtons.forEach(item => {
      item.addEventListener("click", event => {
        event.target.style.display = "none";
      });
    });
  });
})();

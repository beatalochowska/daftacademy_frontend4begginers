(function() {
  document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".page-navigation__items");
    const navItems = document.querySelectorAll(".page-navigation__item");
    const buyButtons = document.querySelectorAll(".button");
    const links = document.querySelectorAll(".page-navigation__title");
    const fun = document.querySelectorAll(".fun");

    burger.addEventListener("click", () => {
      nav.classList.toggle("page-navigation__active");

      // navItems.forEach((link, index) => {
      //   if (link.style.animation) {
      //     link.style.animation = "";
      //   } else {
      //     link.style.animation = `navFade 1s ease forwards ${index / 4 + 0.5}s`;
      //   }
      // });

      burger.classList.toggle("toggle");
    });

    const buttonHolders = document.querySelectorAll(".button__holder");
    buttonHolders.forEach(holder => {
      const childButton = holder.querySelector("button");
      console.log(childButton);

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

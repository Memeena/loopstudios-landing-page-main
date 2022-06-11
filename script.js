"use strict";

const mobileMenu = document.querySelector(".header__mobile");
const navMenu = document.querySelector(".header__navigation");
const headerMenu = document.querySelector(".header__mobile__background");

mobileMenu.addEventListener("click", () => {
  const visibility = navMenu.getAttribute("data-visible");

  if (visibility === "false") {
    navMenu.setAttribute("data-visible", true);
    mobileMenu.setAttribute("aria-expanded", true);
  } else {
    navMenu.setAttribute("data-visible", false);
    mobileMenu.setAttribute("aria-expanded", false);
  }
});

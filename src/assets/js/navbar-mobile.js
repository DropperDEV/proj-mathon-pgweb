var hamburgerMenu = document.querySelector(".hamburger_menu");
var mobileNavbar = document.querySelector(".mobile_navbar");

function toggleNavbar() {
  mobileNavbar.classList.toggle("hidden");
}

hamburgerMenu.addEventListener("click", function() {
  toggleNavbar();
});

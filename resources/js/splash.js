/* Crea tu propia lógica para hacer una splash page que desaparezca */
// Splash page
const splash = document.querySelector(".circle");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 2000);
});
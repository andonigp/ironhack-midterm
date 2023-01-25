/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */

const hamburguer = document.querySelector("#navbar-toggle")
const navMenu = document.querySelector("nav ul")

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})


const scrollTop = document.querySelector(".backTop")
function backTop () {
    window.scrollTo({
        top: 0,
        behavior: "smooth", 
    }
)} 
scrollTop.addEventListener("click", backTop)
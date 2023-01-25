/* Crea tu propia lógica para cambiar la info de About Page a través de DOM manipulation */
//  ------------------ HAMBURGUER MENU -----------------
const hamburguer = document.querySelector("#navbar-toggle")
console.log(hamburguer)
const navMenu = document.querySelector("nav ul")
console.log(navMenu)

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})

//  ------------------ BackTop -----------------
const scrollTop = document.querySelector(".backTop")
function backTop () {
    window.scrollTo({
        top: 0,
        behavior: "smooth", 
    }
)} 
scrollTop.addEventListener("click", backTop)
/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */

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
/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */
//  ------------------ HAMBURGUER MENU -----------------
const hamburguer = document.querySelector("#navbar-toggle")
const navMenu = document.querySelector("nav ul")

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

    let targetAHeader = document.querySelector(".targetA h3")
    let targetBHeader = document.querySelector(".targetB h3")
    let targetCHeader = document.querySelector(".targetC h3")
    let targetAContent = document.querySelector(".targetA p")
    let targetBContent = document.querySelector(".targetB p")
    let targetCContent = document.querySelector(".targetC p")

    console.log(targetAHeader);


//  ------------------ Recent Project Data Pull -----------------
fetch(`https://jsonplaceholder.typicode.com/posts`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => {
    let dataArrayA = data[0]
    targetAHeader.innerHTML = dataArrayA.title;
    targetAContent.innerHTML = dataArrayA.body;
    let dataArrayB = data[1]
    targetBHeader.innerHTML = dataArrayB.title;
    targetBContent.innerHTML = dataArrayB.body;
    let dataArrayC = data[2]
    targetCHeader.innerHTML = dataArrayC.title;
    targetCContent.innerHTML = dataArrayC.body;
    })
  .catch((error) => console.log(error));



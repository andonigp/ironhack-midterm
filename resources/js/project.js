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


//  ------------------ Get URL Instance -----------------
function getCurrentURL () {
    return window.location.href
  }
  
  // Example
  let url = getCurrentURL().split("=")
  url = url[1]

//  ------------------ Recent Project Data Pull -----------------
  let pageTitle = document.querySelector(".generalSection h1")
  let pageSubtitle = document.querySelector(".generalSection h3")
  let pageContent = document.querySelector(".generalSection p")



fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
        // console.log(data)
        let dataArrayA = data[url-1]
        pageTitle.innerHTML = dataArrayA.title
        pageSubtitle.innerHTML = dataArrayA.title
        pageContent.innerHTML = dataArrayA.body
      })
    .catch((error) => console.log(error));

//  ------------------ Create Randon Number -----------------
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const rndIntA = randomIntFromInterval(1, 100)
  const rndIntB = randomIntFromInterval(1, 100)
  const rndIntC = randomIntFromInterval(1, 100)
//   console.log(rndIntA)
//   console.log(rndIntB)
//   console.log(rndIntC)

  let targetAHeader = document.querySelector(".targetA h3")
  let targetBHeader = document.querySelector(".targetB h3")
  let targetCHeader = document.querySelector(".targetC h3")
  let targetAContent = document.querySelector(".targetA p")
  let targetBContent = document.querySelector(".targetB p")
  let targetCContent = document.querySelector(".targetC p")

//  ------------------ Recent Project Data Pull -----------------
fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let dataArrayA = data[rndIntA]
      targetAHeader.innerHTML = dataArrayA.title;
      targetAContent.innerHTML = (dataArrayA.body).slice(0,15);
      let dataArrayB = data[rndIntB]
      targetBHeader.innerHTML = dataArrayB.title;
      targetBContent.innerHTML = (dataArrayB.body).slice(0,15);
      let dataArrayC = data[rndIntC]
      targetCHeader.innerHTML = dataArrayC.title;
      targetCContent.innerHTML = (dataArrayC.body).slice(0,15);
      })
    .catch((error) => console.log(error));

//  ------------------ Create randomized links-----------------
let randomLinkA = `/IronHack-MidTerm/ironhack-midterm/project.html?p=${rndIntA}`
let randomLinkB = `/IronHack-MidTerm/ironhack-midterm/project.html?p=${rndIntB}`
let randomLinkC = `/IronHack-MidTerm/ironhack-midterm/project.html?p=${rndIntC}`

console.log(randomLinkA)
console.log(randomLinkB)
console.log(randomLinkC)

let learnAboutRandomA = document.querySelector(".targetA a")
learnAboutRandomA.href = randomLinkA

let learnAboutRandomB = document.querySelector(".targetB a")
learnAboutRandomB.href = randomLinkB

let learnAboutRandomC = document.querySelector(".targetC a")
learnAboutRandomC.href = randomLinkC

  
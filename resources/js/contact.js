/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */

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




let submitButton = document.querySelector("#submitButton")
let suscriptionAccepted = document.getElementById("suscriptionAccepted")


let submitData = (e) => {
    e.preventDefault()
    // console.log(e)
    // console.log("CTA conected")

    let userName = document.querySelector("#userName").value
    let userEmail = document.querySelector("#userEmail").value
    let userPhone = document.querySelector("#userPhone").value
    let userMessage = document.querySelector("#userMessage").value

    if (!userName || !userMessage) {
        alert("Please fill in the required information.")
    } else {
        fetch("https://jsonplaceholder.typicode.com/comments",{
            method: "Post",
            body: JSON.stringify({
                name: userName,
                email: userEmail,
                phone: userPhone,
                body: userMessage,
    
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
              }, 
        })
        .then((response) => response.json())
        .then((json) => console.log(json))
    
        suscriptionAccepted.classList.add("active")
    }
    // console.log(userName)
    // console.log(userEmail)
    // console.log(userPhone)
    // console.log(userMessage)
} 

submitButton.addEventListener("click", submitData)
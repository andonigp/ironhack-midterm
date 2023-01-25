/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */

let submitButton = document.querySelector("#submitButton")
console.log(submitButton)

let submitData = (e) => {
    e.preventDefault()
    console.log(e)
    console.log("CTA conected")

    let userName = document.querySelector("#userName").value
    let userEmail = document.querySelector("#userEmail").value
    let userPhone = document.querySelector("#userPhone").value
    let userMessage = document.querySelector("#userMessage").value

    console.log(userName)
    console.log(userEmail)
    console.log(userPhone)
    console.log(userMessage)

    fetch("https://jsonplaceholder.typicode.com/comments",{
        method: "Post"
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
} 

submitButton.addEventListener("click", submitData)
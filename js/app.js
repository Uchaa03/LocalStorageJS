
//Selectores
const textarea = document.querySelector("#tweet")
const submit = textarea.nextElementSibling
const container = document.querySelector(".container")
const divHead = container.lastElementChild.lastElementChild

//Listeners
submit.addEventListener("click", checkTweet)
//Para darle consistencia en navegador
document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem("tweets")) || [] //Si esta vacio lo deja vacio
    showTweets()
})


//Variables a usar
let tweets = []
const divError = document.createElement("div")
divError.classList.add("error")
container.appendChild(divError)
divError.textContent = "ERROR, INTRODUCE UN TWEET"
divError.style.visibility = 'hidden'
const divContainer = document.createElement("div")
divHead.appendChild(divContainer)

//Funcíon para checkear lo que se sube
function checkTweet(e) {
    e.preventDefault()
    const value = textarea.value.trim() //Para no pasar espacios vacios
    if (value === "") {
            divError.style.visibility = 'visible'
        setTimeout(() => {
            divError.style.visibility = 'hidden'
        }, 1000); //Quitamos el mensaje de error a los 2 segundos
    } else {
        tweets.push(value)
        showTweets()
    }
    textarea.value = ""
}

function showTweets() {
    divContainer.innerHTML = ""
    //Los vamos agregando debajo del titulo
    tweets.forEach(tweet => {
        //Creamos un parrado donde ir agregando los tweets
        const p = document.createElement("p")
        //Creamos un boton de eliminación de tweets
        const remove = document.createElement("a")
        remove.textContent = "x"
        remove.classList.add("borrar-tweet")
        remove.onclick = removeTweet
        p.textContent = tweet
        p.appendChild(remove)
        divContainer.appendChild(p)
    })
    updateLocalStorage()
}

function removeTweet(e) {
    const pSelector = e.target.parentElement
    const removeTweet = pSelector.firstChild.textContent
    tweets = tweets.filter(tweet => tweet !== removeTweet)
    updateLocalStorage()
    showTweets()
}

//Función para actualizar el localStorage
function updateLocalStorage() {
    const cartProductString = JSON.stringify(tweets)
    localStorage.setItem("tweets", cartProductString)
}
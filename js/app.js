
//Selectores
const textarea = document.querySelector("#tweet")
const submit = textarea.nextElementSibling
const title = document.querySelector("h2")
const container = document.querySelector(".container")

//Listeners
submit.addEventListener("click", checkTweet)

//Variables a usar
const tweets = []
const divError = document.createElement("div")
divError.classList.add("error")
container.appendChild(divError)
divError.textContent = "ERROR, INTRODUCE UN TWEET"
divError.style.visibility = 'hidden'


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
    console.log(tweets)
}
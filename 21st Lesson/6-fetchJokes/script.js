

// add input on the bottom of the card, when input value is changed it should change joke value
// add input and button in top of page "set date" when input value is added and button clicked, all cards time should change to input value

//GETS
const addJokeBtn = document.getElementById('addJokeBtn')
const jokeZone = document.getElementById('jokeZone')
const clearBtn = document.getElementById('clearBtn')
const jokeCount = document.getElementById('jokeCount')
const jokeLetterCount = document.getElementById('jokeLetterCount')

//LISTENERS
addJokeBtn.addEventListener('click', getData)
clearBtn.addEventListener('click', clear)

//VARS
let jokesArray = []
let jokesCounter = 0
let lettersCounter = 0

//FUNCTIONS
function random(num){
    return Math.floor(Math.random() * num)
}

function getData(){
    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data => {
            jokesArray.unshift(data)
            refreshCards()
        })
}

function refreshCards() {

    jokeZone.innerHTML = ""

    jokesArray.map((item, index)=> {

        let card = document.createElement('div')
        card.setAttribute('class', 'jokeCard')
        card.setAttribute('id', index)

        let photo = document.createElement('img')
        photo.src = item.icon_url
        photo.classList.add("img")

        let date = document.createElement('p')
        date.innerText = `Updated @ ${item.updated_at}`

        let link = document.createElement('a')
        link.innerText = "Link to joke"
        link.setAttribute('href', item.url)

        let joke = document.createElement('p')
        joke.innerText = item.value

        let randomClr = document.createElement('button')
        randomClr.innerText = "RANDOM CARD COLOR"

        let close = document.createElement('button')
        close.innerText = "CLOSE"
        close.style.display = "block"
        close.style.marginTop = "5px"
        close.setAttribute('id', item.id)

        jokeZone.appendChild(card)
        card.appendChild(photo)
        card.appendChild(date)
        card.appendChild(link)
        card.appendChild(joke)
        card.appendChild(randomClr)
        card.appendChild(close)

        close.addEventListener('click', closeJoke)
        randomClr.addEventListener('click', changeCardCLr)
    })

    counterUpdater()
    letterCounterUpdater()

}

function closeJoke(event) {
    let id = event.target.id
    jokesArray = jokesArray.filter(el => el.id !== id)
    refreshCards()
}

function changeCardCLr(event) {
    // event.path[1].style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
    event.path[1].style.background = `linear-gradient(${random(360)}deg, rgba(${random(255)}, ${random(255)}, ${random(255)},1) ${random(100)}%, rgba(${random(255)}, ${random(255)}, ${random(255)},1) ${random(100)}%, rgba(${random(255)}, ${random(255)}, ${random(255)},1) ${random(100)}%)`
}

function clear() {
    jokeZone.innerHTML = ""
    jokesArray = []
    counterUpdater()
    letterCounterUpdater()
}

function counterUpdater() {
    jokesCounter = jokesArray.length
    jokeCount.innerText = `Jokes in page: ${jokesCounter}`
}

function letterCounterUpdater() {
    lettersCounter = 0
    for (let i = 0; i < jokesArray.length; i++) {
        lettersCounter += jokesArray[i].value.length
    }
    jokeLetterCount.innerText = `Total letters in jokes: ${lettersCounter}`
}


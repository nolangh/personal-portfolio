import { removeChildren, getLastNumber} from '../utility.js'
import { films } from '../data/films.js'
import { people } from '../data/people.js'

console.log("this is made with js")

console.log(document.querySelector('.greeting'))

let gallery = document.querySelector('.gallery')

let castList = document.createElement("ul")

const maleCharacters = people.filter(person => person.gender === "male")

const femaleCharacters = people.filter(person => person.gender === "female")

const trannyCharacters = people.filter(person => person.gender === "n/a" || person.gender === "none" || person.gender === "hermaphrodite")

let maleButton = document.querySelector( '#maleButton' )
let femaleButton = document.querySelector( '#femaleButton' )
let otherButton = document.querySelector( '#otherButton' )

// these are the buttons//
maleButton.addEventListener("click", function( event ) {
    populateDOM(maleCharacters)
})

femaleButton.addEventListener("click", function( event ) {
    populateDOM(femaleCharacters)
})

otherButton.addEventListener("click", function( event ) {
    populateDOM(trannyCharacters)
})

// function getLastNumber( url ) {
//     let end = url.lastIndexOf('/')
//     let start = end - 2
//     if(url.charAt(start) === '/') {
//         start++
//     }

//     console.log(`start is: ${start} and end is ${end}`)
//     return url.slice(start,end)
// }

function removeChild(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}   

// getLastNumber(url)

let counter = 1



function populateDOM(characters) {
    removeChild(gallery)
 characters.forEach((person) => {
let imageNum = getLastNumber(person.url)
    let personAnchor = document.createElement("a")
    personAnchor.href ="#"
    let personImage = document.createElement("img")
    personImage.src = `https:starwars-visualguide.com/assets/img/characters/${imageNum}.jpg`

    personImage.addEventListener('error', (event) => {
        personImage.hidden = true
    })

    personImage.addEventListener("click", function( event ) {
        console.log('thanks for clicking')
    })

    personAnchor.appendChild(personImage)
    gallery.appendChild(personAnchor)
    counter++
})
}

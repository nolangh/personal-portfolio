import { starships } from '../data/starships.js'
import { removeChildren, getLastNumber} from '../utility.js'

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const ShipView = document.querySelector('#main')
const modalDialog = document.querySelector('.modal')
const modalButton = document.querySelector(".modal-close")
const modalBackground = document.querySelector('.modal-background')
const modalMessage = document.querySelector('.modalMessage')


modalButton.addEventListener('click',() => {
    modalDialog.classList.toggle('is-active')
})
modalBackground.addEventListener('click',() => {
    modalDialog.classList.toggle('is-active')
})

function populateNav(starships) {
    starships.forEach(starship => {
        let shipAnchor = document.createElement('a')
        shipAnchor.href = '#'
        let listItem = document.createElement('li')
        listItem.textContent = starship.name
        
    shipAnchor.addEventListener('click',event =>{
        // store the name of the list item clicked on
        let shipName = event.target.textContent
        const foundShip = starships.find( ship => ship.name === shipName)
        console.log(foundShip)
        populateShipView(foundShip)
        })

        shipAnchor.appendChild(listItem)
        navList.appendChild(shipAnchor)
    })
nav.appendChild(navList)
}

function populateShipView(shipData) {
    removeChildren(ShipView)
    let imageNum = getLastNumber(shipData.url)
    let shipImage = document.createElement('img')
    shipImage.src = `https:starwars-visualguide.com/assets/img/starships/${imageNum}.jpg`
    
    
    shipImage.addEventListener('error', (event) => {
    shipImage.hidden = true
    modalDialog.classList.toggle("is-active")
    modalMessage.textContent = `Sorry My Dude But I Couldnt Find The ${shipData.name}`
    })

    ShipView.appendChild(shipImage)
  /*  let shipTitle = document.createElement('h1')
    shipTitle.textContent = data
    ShipView.appendChild(shipTitle) */
}

populateNav(starships)
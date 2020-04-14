 export function removeChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

 export function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if(url.charAt(start) === '/') {
        start++
    }

    console.log(`start is: ${start} and end is ${end}`)
    return url.slice(start,end)
}

export function addStarField(element, numStar) {
    element.style.setProperty('background-color', 'black')
    for (let i = 0; i < numStar; i++) {
        let star = document.createElement('div')
        star.style.setProperty('position', 'absolute')
        star.style.setProperty('width', '15px')
        star.style.setProperty('height', '2px')
        star.style.setProperty('background-color', 'white')
        star.style.left = '100px'
        star.style.top = '100px'
        element.appendChild(star)
    }
 }
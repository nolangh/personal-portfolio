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
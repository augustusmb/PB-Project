import { getProductPrice } from './Utils/getPrice.js'

const removeFromLocalStorage = product => {
  localStorage.removeItem(product.name)
  window.location.reload()
}

document.addEventListener('DOMContentLoaded', event => {
  for (let key in localStorage) {
    console.log(localStorage)
    let product = JSON.parse(localStorage[key])
    let div = document.createElement('div')
    div.addEventListener('click', () => removeFromLocalStorage(product))
    let textContainer = document.createElement('div')
    textContainer.classList.add('textContainer')
    let name = document.createElement('h3')
    let img = document.createElement('img')
    let price = document.createElement('h4')
  
    name.innerText = product.name
    img.src = product.images[0].href
    price.innerText = `$${JSON.stringify(getProductPrice(product))}`
  
    textContainer.append(name)
    textContainer.append(price)
    div.append(textContainer)
    div.append(img)
    document.getElementsByClassName('saved-container')[0].append(div)
  }
})
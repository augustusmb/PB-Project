import { products } from './products1.js'
import { getProductPrice } from './Utils/getPrice.js'

const addToLocalStorage = product => {
  localStorage.setItem(product.name, JSON.stringify(product))
}

document.addEventListener('DOMContentLoaded', event => {
  products.groups.forEach(product => {
    let div = document.createElement('div')
    div.addEventListener('click', () => addToLocalStorage(product))
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
    document.getElementsByClassName('container')[0].append(div)
  })
})
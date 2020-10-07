import data from './data.js'

const itemsContainer = document.getElementById('items')

for (let i=0; i<data.length; ++i) {
    //create a new div element and give it a class name
    let newDiv = document.createElement('div');
    newDiv.className = 'item'

    //create an image element
    let img = document.createElement('img');
    // this will change each time we go through the loop. Can you explain why?
    img.src = data[i].image
    img.width = 300
    img.height = 300
    newDiv.appendChild(img)

    let desc = document.createElement('P')
    //give the paragraph text from the data
    desc.innerText = data[i].desc
    // append the paragprah to the div
    newDiv.appendChild(desc)
    //do the same thing for price
    let price = document.createElement('P')
    price.innerText = data[i].price
    newDiv.appendChild(price)

    let button = document.createElement('button')
    button.id = data[i].name

    button.dataset.price = data[i].price
    button.innerHTML = "Add to cart"
    newDiv.appendChild(button)
    //put new div inside items container



    //add the image to the div
    itemsContainer.appendChild(newDiv)
    console.log(img)
}

const cart = []

// add items funciton

function addItem(name, price){
    const item = {name: name, price: price, qty: 1}
    cart.push(item)


}
//show items function
function showItems(){
    console.log(`You have ${cart.length} items in your cart`)
}

addItem('Apple', 0.99)
addItem('Orange', 1.29)
addItem('Opinion', 0.02)

showItems()


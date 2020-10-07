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

//------------------------------------------------------
// add items funciton

function addItem(name, price){
    for (let i = 0; i < cart.length; i += 1){
        if (cart[i].name === name){
            cart[i].qty += 1
            //stop here!
            return
        }
    }


    const item = {name, price, qty: 1}
    cart.push(item)


    }
    //---------------------------------------------------
//show items function
function showItems() {
    const qty = getQty()
    console.log(`You have ${getQty()} items in your cart`)

    for(let i = 0; i < cart.length; i += 1){
        console.log(` ${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)

        
    }
    
    console.log(`Total in cart: $${getTotal()}`)
}
//get qty function--------------------------------------------
function getQty (){
    let qty = 0
    for (let i = 0; i <cart.length; i += 1) {
        qty += cart[i].qty
    }
    return qty
}
//get total function--------------------
function getTotal(){
    let total = 0
    for (let i = 0; i < cart.length; i += 1){
        total += cart[i].price * cart[i].qty
    }
    return total.toFixed(2)
}
//-------------------------------------------------------
function removeItem(name, qty = 0) {
    for(let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            if (qty > 0) {
                cart[i].qty -= qty
            }
            cart[i].qty -= 1
            if (cart[i].qty < 1 || qty === 0){
                cart.splice(i, 1)
            }
            
            return 
        }
    }
}

addItem('Apple', 0.99)
addItem('Orange', 1.29)
addItem('Opinion', 0.02)
addItem('Apple', 0.99)
addItem('Frisbee', 9.92)
addItem('Orange', 1.29)

removeItem('apple')
showItems()


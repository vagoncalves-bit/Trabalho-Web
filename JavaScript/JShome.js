//localStorage.clear();
localStorage.setItem("Details", "")
const addToCarButtons = document.getElementsByClassName("carrinho");
const Cart = []
let addToCarCount = 0;
{
if(localStorage.length != 1){
if(localStorage.key([0]) != 'Details')
    addToCarCount = localStorage.key([0]).replace('Cart', '')
else 
    addToCarCount = localStorage.key([1]).replace('Cart', '')
}

for(var i = 0; i < localStorage.length; i++){
    if(localStorage.key([i]) != 'Details'){
        if(localStorage.key([i]).replace('Cart', '') > addToCarCount){
            addToCarCount = localStorage.key([i]).replace('Cart', '')
        }
    }
}
addToCarCount++;
}
let newItem = {};

for(var i = 0; i < addToCarButtons.length/2; i++){
    addToCarButtons[i].addEventListener("click", addToCar);
}

for(var i = addToCarButtons.length/2; i < addToCarButtons.length; i++){
    addToCarButtons[i].addEventListener("click", addToCarPromotions);
}

function addToCarPromotions(event){
    const nameItem = event.target.getAttribute('name')
        const person = document.getElementsByName(nameItem)
        Cart.push('Cart' + addToCarCount);
        newItem.link = person[0].querySelector('img').src;
        newItem.name = person[0].getElementsByTagName('h3')[0].innerText;
        newItem.price = person[0].querySelector('h2').innerText;
        localStorage.setItem('Cart' + addToCarCount, JSON.stringify(newItem));
        addToCarCount++;
        alert("Item adicionado ao Carrinho")
}

function addToCar(event){
    const nameItem = event.target.getAttribute('name')
        const person = document.getElementsByName(nameItem)
        Cart.push('Cart' + addToCarCount);

        newItem.link = person[0].querySelector('img').src;
        newItem.name = person[0].getElementsByTagName('h3')[0].innerText;
        newItem.price = person[0].getElementsByTagName('h3')[1].innerText;
 
        localStorage.setItem('Cart' + addToCarCount, JSON.stringify(newItem));
        addToCarCount++;
        alert("Item adicionado ao Carrinho")
}


const arrayDetails = document.getElementsByClassName('compra_destaques');
for(var i = 0; i < arrayDetails.length; i++){
    if(i<4 || (i>7)&&(i<12))
        arrayDetails[i].addEventListener("click", infoDetails)
}


function infoDetails(event){
    let productDetails = {};
    if(event.target.classList.length === 0){
        if(event.target.parentElement.parentElement.getElementsByTagName('h3').length != 1){
            productDetails.img = event.target.parentElement.parentElement.getElementsByTagName('img')[0].src
            productDetails.name = event.target.parentElement.parentElement.getElementsByTagName('h3')[0].innerText
            productDetails.price = event.target.parentElement.parentElement.getElementsByTagName('h3')[1].innerText
        } else{
            productDetails.img = event.target.parentElement.parentElement.getElementsByTagName('img')[0].src
            productDetails.name = event.target.parentElement.parentElement.getElementsByTagName('h3')[0].innerText
            productDetails.price = event.target.parentElement.parentElement.getElementsByTagName('h2')[0].innerText
            productDetails.discount = event.target.parentElement.parentElement.getElementsByTagName('h4')[0].innerText
        }
    }else {
        if(event.target.parentElement.parentElement.getElementsByTagName('h3').length != 1){
            productDetails.img = event.target.parentElement.getElementsByTagName('img')[0].src
            productDetails.name = event.target.parentElement.getElementsByTagName('h3')[0].innerText
            productDetails.price = event.target.parentElement.getElementsByTagName('h3')[1].innerText
        } else{
            productDetails.img = event.target.parentElement.getElementsByTagName('img')[0].src
            productDetails.name = event.target.parentElement.getElementsByTagName('h3')[0].innerText
            productDetails.price = event.target.parentElement.getElementsByTagName('h2')[0].innerText
            productDetails.discount = event.target.parentElement.getElementsByTagName('h4')[0].innerText
        }
    }
    console.log(productDetails)
    localStorage.setItem("Details", JSON.stringify(productDetails));
}
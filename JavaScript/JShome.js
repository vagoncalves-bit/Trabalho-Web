localStorage.clear();
const addToCarButtons = document.getElementsByClassName("carrinho");
const Cart = []
const price = []
let addToCarCount = parseInt(localStorage.length);
let newItem = {};

for(var i = 0; i < localStorage.length; i++){
    link.push(localStorage.key(i));
}

for(var i = 0; i < localStorage.length; i++){
    price.push(localStorage.key(i));
}

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
 
        localStorage.setItem(Cart[addToCarCount], JSON.stringify(newItem));
        addToCarCount++;
}

function addToCar(event){
    const nameItem = event.target.getAttribute('name')
        const person = document.getElementsByName(nameItem)
        Cart.push('Cart' + addToCarCount);

        newItem.link = person[0].querySelector('img').src;
        newItem.name = person[0].getElementsByTagName('h3')[0].innerText;
        newItem.price = person[0].getElementsByTagName('h3')[1].innerText;
 
        localStorage.setItem(Cart[addToCarCount], JSON.stringify(newItem));
        addToCarCount++;
        alert("Item adicionado ao Carrinho")
}
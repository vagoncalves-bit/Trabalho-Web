localStorage.removeItem("Details")
if(localStorage.getItem('produtoClicado') == null){
    localStorage.setItem('produtoClicado', '');
}
if(localStorage.getItem('nameUser') == null){
    localStorage.setItem('nameUser', '');
}

const addToCarButtons = document.getElementsByClassName("carrinho");
const Cart = []

let addToCarCount = 0;

for(var i = 0; i < localStorage.length; i++){
    if(localStorage.key([i]) != 'produtoClicado' || localStorage.key([i]) != 'nameUser'){
        if(parseInt(localStorage.key([i]).replace('Cart', '')) > addToCarCount){
            addToCarCount = parseInt(localStorage.key([i]).replace('Cart', ''));
        }
    }
}
addToCarCount++;


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
            productDetails.imagem = event.target.parentElement.parentElement.getElementsByTagName('img')[0].src
            productDetails.nome = event.target.parentElement.parentElement.getElementsByTagName('h3')[0].innerText
            productDetails.preco = event.target.parentElement.parentElement.getElementsByTagName('h3')[1].innerText
        } else{
            productDetails.imagem = event.target.parentElement.parentElement.getElementsByTagName('img')[0].src
            productDetails.name = event.target.parentElement.parentElement.getElementsByTagName('h3')[0].innerText
            productDetails.precoPromocional = event.target.parentElement.parentElement.getElementsByTagName('h2')[0].innerText
            productDetails.preco = event.target.parentElement.parentElement.getElementsByTagName('h4')[0].innerText
        }
    }else {
        if(event.target.parentElement.parentElement.getElementsByTagName('h3').length != 1){
            productDetails.imagem = event.target.parentElement.getElementsByTagName('img')[0].src
            productDetails.nome = event.target.parentElement.getElementsByTagName('h3')[0].innerText
            productDetails.preco = event.target.parentElement.getElementsByTagName('h3')[1].innerText
        } else{
            productDetails.imagem = event.target.parentElement.getElementsByTagName('img')[0].src
            productDetails.nome = event.target.parentElement.getElementsByTagName('h3')[0].innerText
            productDetails.precoPromocional = event.target.parentElement.getElementsByTagName('h2')[0].innerText
            productDetails.preco = event.target.parentElement.getElementsByTagName('h4')[0].innerText
        }
    }
    localStorage.setItem("produtoClicado", JSON.stringify(productDetails));
}

if(localStorage.getItem("nameUser") != ""){
    const buttonsTop = document.getElementsByClassName("button_categoria")
    buttonsTop[2].innerText = localStorage.getItem("nameUser");
}

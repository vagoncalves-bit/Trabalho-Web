const Cart = []

let addToCarCount = 0;
let newItem = {};
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

const itemFocus = JSON.parse(localStorage.getItem("Details"));

const divImg = document.getElementsByClassName('imagem-item');
divImg[0].getElementsByTagName("img")[0].src = itemFocus.img;

const divDescription = document.getElementsByClassName('descricao-item')[0];

const titleProduct = divDescription.getElementsByClassName("titulo-produto")[0];
titleProduct.innerText = itemFocus.name;

const descriptionProduct = divDescription.getElementsByClassName("descricao-produto")[0];
descriptionProduct.innerText = descriptionProduct.innerText.replace("Citlali", itemFocus.name);

const divPrice = document.getElementsByClassName('precos');
if(itemFocus.discount != undefined){
    divPrice[0].getElementsByTagName('p')[0].innerText = itemFocus.discount;
} else{
    divPrice[0].getElementsByTagName('p')[0].innerText = "";
}
divPrice[0].getElementsByTagName('p')[1].innerText = itemFocus.price + " À vista";


const addToCarButton = document.getElementsByClassName('botao-carrinho');
addToCarButton[0].addEventListener("click", addToCar);

function addToCar(event){

    newItem.link = itemFocus.img;
    newItem.name = itemFocus.name;
    newItem.price = itemFocus.price;

    localStorage.setItem('Cart' + addToCarCount, JSON.stringify(newItem));
        addToCarCount++;
        alert("Item adicionado ao Carrinho")
}
if(localStorage.getItem("nameUser") != ""){
    const buttonsTop = document.getElementsByClassName("button_categoria")
    buttonsTop[2].innerText = localStorage.getItem("nameUser");
}
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

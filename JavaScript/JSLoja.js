
updatePrice();

const removeButtons = document.getElementsByClassName("remover");
for(var i = 0; i < removeButtons.length; i++){
    removeButtons[i].addEventListener("click", removeItem);
}
const qtdButtons = document.getElementsByClassName("qtdInput");
for(var i = 0; i < qtdButtons.length; i++){
    qtdButtons[i].addEventListener("change", updatePrice);
}
const addButtons = document.getElementsByClassName("carrinho")
console.log(addButtons)



function removeItem(event){
    event.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    updatePrice();
}

function updatePrice(){
    let totalPrice = 0;
    const allProducts = document.getElementsByClassName("productDiv");
    for(var i = 0; i < allProducts.length; i++){
        const priceProducts = allProducts[i].getElementsByClassName("preçoCarrinho")[0].innerText.replace("R$", "").replace(",",".");
        const productQtd = allProducts[i].getElementsByClassName("qtdInput")[0].value;
        totalPrice += priceProducts*productQtd;
    }

    totalPrice = totalPrice.toFixed(2);
    totalPrice = totalPrice.replace(".", ",");
    document.getElementsByClassName("ValorFooter")[0].innerText = "R$" + totalPrice;
}
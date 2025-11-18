
newItem = {};
ItensInCart = [];
updatePrice();



const removeButtons = document.getElementsByClassName("remover");
for(var i = 0; i < removeButtons.length; i++){
    removeButtons[i].addEventListener("click", removeItem);
}

const qtdButtons = document.getElementsByClassName("qtdInput");
for(var i = 0; i < qtdButtons.length; i++){
    qtdButtons[i].addEventListener("change", updatePrice);
}



function removeItem(event){
    let removeLocalKey;
    for(var i = 0; i < document.getElementsByClassName('remover').length; i++)
    if(document.getElementsByClassName('remover')[i] == event.target){
        removeLocalKey = i;
    }
    if(localStorage.key(localStorage.length-1) != null){
    for(var i = 0; i < localStorage.key(localStorage.length-1).replace("Cart","")+1; i++){
        if(JSON.parse(localStorage.getItem("Cart"+i)) != null){
            if(JSON.parse(localStorage.getItem("Cart"+i)).link == event.target.parentElement.parentElement.querySelector('img').src){
                localStorage.removeItem("Cart"+i)
            }
        }
    }
}
    
    event.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    updatePrice();
    if(document.getElementsByClassName('remover').length === 0){
        localStorage.clear();
    }
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

    const qtdTotal = document.getElementsByClassName('qtdInput');
    let valorTotal = 0;
    for(var i = 0; i < qtdTotal.length; i++){
        valorTotal += parseInt(qtdTotal[i].value);
    }
    document.getElementsByClassName('QtdFooter')[0].innerHTML = valorTotal;

}

for(var i = 0; i < localStorage.key(localStorage.length-1).replace("Cart","")+1; i++){
    if(JSON.parse(localStorage.getItem("Cart"+i)) != null){
        newItem = JSON.parse(localStorage.getItem("Cart"+i));
        ItensInCart.push(newItem)
    }
}

for(var i = 0; i < ItensInCart.length; i++){
    const linkNewItem = ItensInCart[i].link;
    const nameNewItem = ItensInCart[i].name;
    const priceNewItem = ItensInCart[i].price;

    let control = 0;
 
    const oldItens = document.getElementsByClassName('imgCarrinho');
    for(var j = 0; j < oldItens.length; j++){
        if(oldItens[j].src == linkNewItem){
            oldItens[j].parentElement.parentElement.querySelector('input').value++
            control = 1;
        }
    }

    if(control == 0){
        let newDivProduct = document.createElement("div")
        newDivProduct.classList.add("productDiv")
        newDivProduct.innerHTML = 
        `
        <table>
                <td>    
                    <img src="${linkNewItem}" class="imgCarrinho" title="${nameNewItem}">
                </td>
                <td class="preçoCarrinho">
                    ${priceNewItem}
                </td>
                <td class="qtdCarrinho">
                    <input class="qtdInput" type="number" value="1" min="1">
                </td>
                <td>
                    <button type="button" class="remover" style="font-family: Genshin; font-size:12px; color:white;">Remover</button>
                </td>
        </table>
        `

        let newFooter = document.createElement("div")
        newFooter.classList.add("footer")
        newFooter.innerHTML =
        `
        <table>
                        <th> Valor Total: </th>
                        <th> Quantidade de itens:</th>
                        <th class="buttonFooter"><button type="button" class="confirmar" style="font-family: Genshin; font-size:12px; color:white;">Finalizar compra</button> </th> <tr>
                        <td class="ValorFooter"> "SOMA"</td>
                        <td class="QtdFooter"> "ITENS"</td>
                    </table> 
        </div>
        ` 
        document.getElementsByClassName('footer')[0].remove();
        const mainDiv = document.getElementsByClassName("mainDiv")[0];
        mainDiv.append(newDivProduct);
        newDivProduct.getElementsByTagName('input')[0].addEventListener("change", updatePrice);
        newDivProduct.getElementsByTagName('button')[0].addEventListener("click", removeItem);
        mainDiv.append(newFooter)
    }
    updatePrice();
}
   
if(localStorage.getItem("nameUser") != ""){
    const buttonsTop = document.getElementsByClassName("button_categoria")
    buttonsTop[2].innerText = localStorage.getItem("nameUser");
}
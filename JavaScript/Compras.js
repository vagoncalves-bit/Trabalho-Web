
//recuperando os dados do produto selecionado na página de catálogo//
const produtoAtual = JSON.parse(localStorage.getItem("produtoClicado"));

//preenchendo os campos da página de compra//
document.getElementsByClassName("imagem")[0].src = produtoAtual.imagem;
document.getElementsByClassName("titulo-produto")[0].innerText = produtoAtual.nome;
document.getElementsByClassName("descricao-produto")[0].innerText = 'Vestuario de '+produtoAtual.nome;
document.getElementsByClassName("preco-produto")[0].innerText = produtoAtual.preco;

if(produtoAtual.button1){
    document.getElementsByClassName("pague_online")[0].innerText = produtoAtual.button1;
}else{
    document.getElementsByClassName("pague_online")[0].style.display = 'none';
}

if(produtoAtual.button2 != undefined){
    document.getElementsByClassName("pague_online")[1].innerText = produtoAtual.button2;
}else{
    document.getElementsByClassName("pague_online")[1].style.display = 'none';
}

document.getElementsByClassName("preco-produto")[0].innerText = produtoAtual.preco;
if(produtoAtual.precoPromocional != undefined){
    document.getElementsByClassName("preco-produto")[0].style.textDecoration = 'line-through';
    document.getElementsByClassName("preco-promocao")[0].innerText = produtoAtual.precoPromocional;
}else{
    document.getElementsByClassName("preco-produto")[0].style.textDecoration = 'none';
    document.getElementsByClassName("preco-promocao")[0].innerText = '';
}

/*Versão javascript puro
*/
//function obterDadosProduto()//

const imagemProduto = document.getElementsByClassName("imagem")[0];
const precoProduto = document.getElementsByClassName("preco-produto")[0];
const precoPromocionalProduto = document.getElementsByClassName("preco-promocao")[0];

function obterDadosProduto() {
    const produto = {
        linkImagem: imagemProduto.src,
        preco: precoProduto.innerText,
        precoPromocional: precoPromocionalProduto.innerText
    };

    const produtoJSON = JSON.stringify(produto);
    localStorage.setItem("produtoSelecionado", produtoJSON);

    console.log("Dados do produto salvos no localStorage.");
}

const Cart = []

let newItem = {};

let addToCarCount = 0;

for(var i = 0; i < localStorage.length; i++){
    if(localStorage.key([i]) != 'Details' || localStorage.key([i]) != 'nameUser'){
        if(parseInt(localStorage.key([i]).replace('Cart', '')) > addToCarCount){
            addToCarCount = parseInt(localStorage.key([i]).replace('Cart', ''));
        }
    }
}
addToCarCount++;

const addToCarButton = document.getElementsByClassName('botao-carrinho');
addToCarButton[0].addEventListener("click", addToCar);

function addToCar(event){
    if(produtoAtual.precoPromocional != undefined){
        newItem.link = produtoAtual.imagem;
        newItem.name = produtoAtual.nome;
        newItem.price = produtoAtual.precoPromocional;
    }else{
        newItem.link = produtoAtual.imagem;
        newItem.name = produtoAtual.nome;
        newItem.price = produtoAtual.preco;
    }
    localStorage.setItem('Cart' + addToCarCount, JSON.stringify(newItem));
        addToCarCount++;
        alert("Item adicionado ao Carrinho")
}
if(localStorage.getItem("nameUser") != ""){
    const buttonsTop = document.getElementsByClassName("button_categoria")
    buttonsTop[2].innerText = localStorage.getItem("nameUser");
}
   

/*
Versão Jquery
*/
/*
$(document).ready(function(){

const imagemProduto = $(".imagem").eq(0).attr("src");
const precoProduto = $(".preco-produto").eq(0).text();
const precoPromocionalProduto = $(".preco-promocao").eq(0).text();

function obterDadosProduto() {
    const produto = {
        linkImagem: imagemProduto,
        preco: precoProduto,
        precoPromocional: precoPromocionalProduto
    };
    const produtoJSON = JSON.stringify(produto);
    localStorage.setItem("produtoSelecionado", produtoJSON);
    console.log("Dados do produto salvos no localStorage.");
}

});

*/
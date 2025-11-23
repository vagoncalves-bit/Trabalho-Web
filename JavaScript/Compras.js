//recuperando os dados do produto selecionado na página de catálogo//
const produtoAtual = JSON.parse(localStorage.getItem("produtoClicado"));

//preenchendo os campos da página de compra//
document.getElementsByClassName("imagem")[0].src = produtoAtual.imagem;
document.getElementsByClassName("titulo-produto")[0].innerText = produtoAtual.nome;
document.getElementsByClassName("descricao-produto")[0].innerText = 'Vestuario de '+produtoAtual.nome;
document.getElementsByClassName("preco-produto")[0].innerText = produtoAtual.preco;

document.getElementsByClassName("pague_online")[0].innerText = produtoAtual.button1;

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
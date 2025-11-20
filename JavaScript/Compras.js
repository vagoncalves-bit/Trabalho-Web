
/*Versão javascript puro
*/

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
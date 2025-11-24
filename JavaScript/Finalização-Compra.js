/*Versão JavaScript Puro
*/


const produtoAtual = JSON.parse(localStorage.getItem('produtoSelecionado'));

document.getElementsByClassName('imagem')[0].src = produtoAtual.linkImagem;
document.getElementsByClassName('preco-produto')[0].innerText = 'Total: '+produtoAtual.preco;
if(produtoAtual.precoPromocional != ""){
    document.getElementsByClassName('preco-produto')[0].style.textDecoration = 'line-through';
    document.getElementsByClassName('preco-promocao')[0].innerText = 'Total: '+produtoAtual.precoPromocional;
}else{
    document.getElementsByClassName('preco-produto')[0].style.fontsize = '20px';
    document.getElementsByClassName('preco-produto')[0].style.textDecoration = 'none';
    document.getElementsByClassName('preco-promocao')[0].innerText = '';
}


/*
Versão Jquery
*/

/*
$(document).ready(function(){

const produtoAtual = JSON.parse(localStorage.getItem('produtoSelecionado'));

$('.imagem').eq(0).attr('src', produtoAtual.linkImagem);
$('.preco-produto').eq(0).text('Total: ' + produtoAtual.preco);
if (produtoAtual.precoPromocional !== "") {
    $('.preco-promocao').eq(0).text('Total: ' + produtoAtual.precoPromocional);
} else {
    $('.preco-promocao').eq(0).text('');
}

});
*/

function endereco(){  

    let latitude, longitude;
    var mapa = null;
    
    function sucesso(posicao){
        latitude = posicao.coords.latitude;
        longitude = posicao.coords.longitude;

        if(mapa === null){
            mapa = L.map('mapa').setView([latitude, longitude], 15);
        }else{
            mapa.remove();
            mapa = L.map('mapa').setView([latitude, longitude], 15);
        }

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapa);

        L.marker([latitude, longitude]).addTo(mapa)
        .bindPopup('Aqui é o seu endereço de entrega!')
        .openPopup();
    }

    function erro(){
        alert("Não foi possível obter a localização.");
    }

    navigator.geolocation.getCurrentPosition(sucesso, erro);
}
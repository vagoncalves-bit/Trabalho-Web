document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona os elementos principais
    const applyButton = document.getElementById('apply-filter-btn');
    const productItems = document.querySelectorAll('.produto_catalogo');
    
    // NOTA: Os inputs de rádio são selecionados dentro da função para garantir o estado atual.

    /**
     * Função principal que aplica a filtragem com base na região selecionada.
     */
    function applyFilter() {
        // Encontra o radio button de região que está MARCADO (checked)
        const selectedRadio = document.querySelector('input[name="regiao"]:checked');
        
        // Se, por algum motivo, não houver rádio marcado, tratamos como 'all' para evitar erros.
        const selectedRegion = selectedRadio ? selectedRadio.value : 'all'; 

        // Se a região selecionada for 'all' (Todos), exibe todos os produtos.
        if (selectedRegion === 'all') {
            productItems.forEach(item => {
                item.classList.remove('hidden');
            });
            return; // Termina a função
        }

        // Lógica de filtragem para regiões específicas
        productItems.forEach(item => {
            // Obtém a região do produto (usando 'name' )
            const itemRegion = item.getAttribute('name'); 
            
            // Verifica se a região do item corresponde à região selecionada
            if (itemRegion === selectedRegion) {
                // Se corresponder, remove a classe hidden para EXIBIR
                item.classList.remove('hidden');
            } else {
                // Se não corresponder, adiciona a classe hidden para OCULTAR
                item.classList.add('hidden'); 
            }
        });
    }

    // 2. Ouve o clique no botão "Aplicar filtro"
    if (applyButton) { // Verifica se o botão existe no HTML
        applyButton.addEventListener('click', (event) => {
            // Previne o comportamento padrão (como recarregar a página)
            event.preventDefault(); 
            applyFilter();
        });
    }
    
    // 3. Estado Inicial: Garante que todos estejam visíveis ao carregar a página
    // Isso é feito simulando o filtro 'all'
    applyFilter();
});

//Javascript para pegar as informações do produto selecionado e enviar para a página de detalhes//

//array com os links dos produtos//
const linksProdutos = document.getElementsByClassName("compra_destaques");
//adicionando evento de clique em cada link de produto//
for (let i = 0; i < linksProdutos.length; i++) {
    linksProdutos[i].addEventListener("click", function(evento) {
        evento.preventDefault(); // Impede o link de carregar a próxima página antes de coletar as informações//
        //coletando as informações do produto clicado//
        const divProduto = this.closest(".produto_catalogo"); //pega informações apenas da div pai do link clicado//

        const linkPaginaCompra = this.getAttribute("href"); //pega o link da página de compra//
        const imagemProduto = divProduto.getElementsByClassName("imagem")[0].src; //link da imagem//
        const nomeProduto = divProduto.getElementsByClassName("compra_destaques")[0].innerText; //nome do produto//
        const precoProduto = divProduto.getElementsByClassName("preco")[0].innerText; //preço do produto//
        
        const tagsButtons = divProduto.getElementsByClassName("pague_online"); //botões de tags//
        const arrayTags = [];
        //array pois o número de tags pode variar//
        for (let j = 0; j < tagsButtons.length; j++) {
            arrayTags.push(tagsButtons[j].innerText);
        }

        const precoPromocionalProduto = divProduto.getElementsByClassName("preco_promocao");
        const arrayPrecosPromocionais = [];
        //array pois o preço promocional pode não existir//
        for (let k = 0; k < precoPromocionalProduto.length; k++) {
            arrayPrecosPromocionais.push(precoPromocionalProduto[k].innerText);
        }
        
        //objeto produto//
        const produto = {
            imagem: imagemProduto,
            nome: nomeProduto,
            button1: arrayTags[0],
            button2: undefined,
            preco: precoProduto,
            precoPromocional: undefined,
        };

        //checando se tem mais de uma tag//
        if(arrayTags.length == 1){
            produto.button2 = undefined;
        }else{
            produto.button2 = arrayTags[1];
        }

        //checando se tem preço promocional//
        if(arrayPrecosPromocionais.length == 0){
            produto.precoPromocional = undefined;
        }else{
            produto.precoPromocional = arrayPrecosPromocionais[0];
        }
        
        //convertendo o objeto para JSON//
        const produtoJSON = JSON.stringify(produto);
        //salvando o JSON no localStorage//
        localStorage.setItem("produtoClicado", produtoJSON);

        //redirecionando para a página de compra//
        window.location.href = linkPaginaCompra;
    });
}
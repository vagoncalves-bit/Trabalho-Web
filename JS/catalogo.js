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
            // Obtém a região do produto (usando 'name' como no seu HTML original)
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
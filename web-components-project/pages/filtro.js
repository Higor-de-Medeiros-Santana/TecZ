document.addEventListener('DOMContentLoaded', () => {
    // Lida com a expansão/colapso dos grupos de filtros
    document.querySelectorAll('.filter-title').forEach(title => {
        title.addEventListener('click', () => {
            // Não aplica a lógica para sub-filtros, apenas grupos principais
            // Isso previne que o sub-filtro de Notebook (que já tem um manipulador)
            // também seja afetado por este ou vice-versa, mantendo a hierarquia.
            if (!title.classList.contains('sub-filter')) {
                const options = title.nextElementSibling;
                if (options) {
                    options.classList.toggle('expanded');
                    title.classList.toggle('active');
                }
            }
        });
    });

    // Lida com a expansão/colapso dos sub-filtros (ex: Notebook > Gamers)
    document.querySelectorAll('.filter-options .sub-filter').forEach(subTitle => {
        subTitle.addEventListener('click', () => {
            const nestedOptions = subTitle.nextElementSibling;
            if (nestedOptions && nestedOptions.classList.contains('nested')) {
                nestedOptions.classList.toggle('expanded');
                subTitle.classList.toggle('active');
            }
        });
    });

    // Abrir o filtro "Tipo" e "Notebook" por padrão como na imagem
    // e os novos filtros "Marca" e "Preço"
    // Adiciona uma pequena condição para não dar erro se o elemento não existir
    const tipoFilter = document.querySelector('.filter-group .filter-title');
    if (tipoFilter && !tipoFilter.classList.contains('active')) { // Verifica se já não está ativo
        tipoFilter.click(); // Simula um clique para expandir
    }

    const notebookSubFilter = document.querySelector('.filter-options .sub-filter');
    if (notebookSubFilter && !notebookSubFilter.classList.contains('active')) {
        notebookSubFilter.click(); // Simula um clique para expandir o sub-filtro de Notebook
    }

    // Expandir os novos filtros "Marca" e "Preço" por padrão se existirem
    // Acha todos os .filter-group e itera sobre eles para expandir os que não foram expandidos
    document.querySelectorAll('.filter-group').forEach(group => {
        const title = group.querySelector('.filter-title');
        const options = group.querySelector('.filter-options');
        // Verifica se o filtro ainda não está expandido e se não é o sub-filtro de notebook
        if (title && options && !options.classList.contains('expanded') && !title.classList.contains('sub-filter')) {
            title.click(); // Simula um clique para expandir
        }
    });

});
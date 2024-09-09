function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada anime na lista de animes
    for (let anime of animes) {
        // Cria uma nova div para cada anime e adiciona as informações
        resultados += `
            <div class="item-resultado">
                <h2>${anime.titulo}</h2>
                <p class="descricao-meta">${anime.descricao}</p>
                <p>Onde assistir 
                    <a href="${anime.links}" target="_blank">Netflix</a>
                </p>
            </div>
        `;
    }

    // Atribui a string com os resultados ao conteúdo da seção
    section.innerHTML = resultados;
}
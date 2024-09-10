function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o id onde os resultados do campo-pesquisa serão exibidos
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase();

		// Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // se campoPesquisa estiver vazio
    if (campoPesquisa == "") {
        section.innerHTML ='<p>Nada foi encontrado</p>';
        return;
    }    

    // Itera sobre cada anime na lista de animes
    for (let anime of animes) {
        titulo = anime.titulo.toLowerCase();
        descricao = anime.descricao.toLowerCase();
        // se titulo includes camposPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Cria uma nova div para cada anime e adiciona as informações
            resultados += `
                <div class="item-resultado">
                    <h2>${anime.titulo}</h2>
                    <p class="descricao-meta">${anime.descricao}</p>
                    <p>Onde assistir 
                        <a href="${anime.links}" target="_blank">Crunchyroll</a>
                    </p>
                </div>
            `;    
        }

        
    }

    // Atribui a string com os resultados ao conteúdo da seção
    section.innerHTML = resultados;
}
// Objetivo 1 - quando o usuario clicar no botao de selecao de plataformas deve abrir u,a caixa com os botoes de selecao de plataforma

//Passo 1 - pegar o botao de selecao de plataformas no JS pra poder verificar quando o usuario clicar em cima dele

const botao = document.querySelector(".btn-plataforma");

//Passo 2 - pegar o elemento do conteudo que precisa ser mostrado

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

//Passo 3 - pegar o clique do ususario no JS

botao.addEventListener("click", () => {

    elementoPlataformas.classList.toggle("ativo");
});


    //Objetivo 2 - caso a lista de botoes de plataformas ja esteja aparecendo e o usuario clicar em cima do botao, o conteudo deve sser escondido
    //Passo 1 - verificar se o botao ja esta aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteudo novamente

    // Passo 4 - quando o usuario clicar, adicionar a classe ativo na listagem de plataformas dentro do botao pra que o conteudo apareca
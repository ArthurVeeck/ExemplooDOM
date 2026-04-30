// capturar os elementos por ID

const botaoAtivar = document.getElementById("btnAtivar");
const peca = document.getElementById("peca");
const statusTexto = document.getElementById("statusTexto");
const iconePeca = document.getElementById("iconePeca");
const tituloPeca = document.getElementById("tituloPeca");
const textoPeca = document.getElementById("textoPeca");

// Estado da Aplicação

let pecaAtivada = false;

// Evento de clique

// Vamos adicionar evento de Clique
botaoAtivar.addEventListener("click", function(){
     // Verificar se a peça foi ativada
     if(pecaAtivada === false){
        // remoção
        peca.classList.remove("bloqueada");

        // Adicionar classe ativa
        peca.classList.add("ativa");

        // Mudança de texto
        statusTexto.innerText = "Ativada";

        // Alterar cor do texto
        statusTexto.style.color = "#22c55e";

        // Altera icone da peça
        iconePeca.innerText = "";

        // Alterar titulo da peça
        tituloPeca.innerText = "Peça ativada";

        // Alterar descrição da peça
        textoPeca.innerHTML = "Parabéns! Você ativou a primeira peça";

        // Alterar texto do botão
        botaoAtivar.innerText = "Peça Ativada";

        // Desativar o botão após clique
        botaoAtivar.disabled = true;

        // Atualizar var de controle
        pecaAtivada = true;
     }
})

// Vamos deixar a peça clicável e mandar para outra página
peca.addEventListener("click", function(){
    // Verificando se a peça está ativada
    if(pecaAtivada === true){
        // Caso a peça esteja ativada irá mandar para o site de explicação da matéria
        peca.getAttribute = window.location.href = "paginaExplicação.html"
    }
})

const botaoAtivar2 = document.getElementById("btnAtivar2");
const peca2 = document.getElementById("peca2");
const statusTexto2 = document.getElementById("statusTexto2");
const iconePeca2 = document.getElementById("iconePeca2");
const tituloPeca2 = document.getElementById("tituloPeca2");
const textoPeca2 = document.getElementById("textoPeca2");

let peca2Ativada = false;

botaoAtivar2.addEventListener("click", function(){
    if(!peca2Ativada){
        peca2.classList.remove("bloqueada");
        peca2.classList.add("ativa");

        statusTexto2.innerText = "Ativada";
        statusTexto2.style.color = "#22c55e";

        iconePeca2.innerText = "🧩";
        tituloPeca2.innerText = "Peça 2 ativada";
        textoPeca2.innerText = "Você desbloqueou a segunda peça!";

        botaoAtivar2.disabled = true;

        peca2Ativada = true;
    }
})
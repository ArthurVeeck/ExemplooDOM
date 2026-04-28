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
        peca.getAttribute = window.location.href = "https://professorederderosso.notion.site/Introdu-o-ao-JavaScript-DOM-3508374555cd80b7a4f6f4a6b00f21af"
    }
})
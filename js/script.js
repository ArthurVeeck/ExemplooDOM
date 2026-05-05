// ======================= PEÇA 1 ===============================

const botaoAtivar = document.getElementById("btnAtivar");
const peca = document.getElementById("peca");
const statusTexto = document.getElementById("statusTexto");
const iconePeca = document.getElementById("iconePeca");
const tituloPeca = document.getElementById("tituloPeca");
const textoPeca = document.getElementById("textoPeca");

let pecaAtivada = false;

if(botaoAtivar){
botaoAtivar.addEventListener("click", function(){

    if(!pecaAtivada){
        peca.classList.remove("bloqueada");
        peca.classList.add("ativa");

        statusTexto.innerText = "Ativada";
        statusTexto.style.color = "#22c55e";

        iconePeca.innerText = "🧩";
        tituloPeca.innerText = "Peça ativada";
        textoPeca.innerText = "Você ativou a primeira peça";

        botaoAtivar.innerText = "Peça Ativada";
        botaoAtivar.disabled = true;

        pecaAtivada = true;
    }

});
}

if(peca){
peca.addEventListener("click", function(){
    if(pecaAtivada){
        window.location.href = "paginaExplicação.html";
    }
});
}


// =================== PEÇA 2 ===============================

const botaoAtivar2 = document.getElementById("btnAtivar2");
const peca2 = document.getElementById("peca2");
const statusTexto2 = document.getElementById("statusTexto2");
const iconePeca2 = document.getElementById("iconePeca2");
const tituloPeca2 = document.getElementById("tituloPeca2");
const textoPeca2 = document.getElementById("textoPeca2");

let ativo2 = false;
let cor2 = 0;

if(botaoAtivar2){
botaoAtivar2.addEventListener("click", function(){

    if(!ativo2){
        peca2.classList.remove("bloqueada");
        peca2.classList.add("ativa");

        statusTexto2.innerText = "Ativada";
        statusTexto2.style.color = "#22c55e";

        iconePeca2.innerText = "⚡";
        tituloPeca2.innerText = "Peça 2 ativada";
        textoPeca2.innerText = "Sistema avançado ativado!";

        botaoAtivar2.innerText = "Desativar";

        ativo2 = true;

    } else {
        peca2.classList.remove("ativa");
        peca2.classList.add("bloqueada");

        statusTexto2.innerText = "Bloqueada";
        statusTexto2.style.color = "#facc15";

        iconePeca2.innerText = "🔒";
        tituloPeca2.innerText = "Bloqueada";
        textoPeca2.innerText = "Aguardando...";

        botaoAtivar2.innerText = "Ativar";

        ativo2 = false;
    }

});
}

// mudança de cor da peça 2
if(peca2){
peca2.addEventListener("click", function(){

    if(ativo2){

        if(cor2 === 0){
            peca2.style.background = "red";
            cor2 = 1;
        } else if(cor2 === 1){
            peca2.style.background = "blue";
            cor2 = 2;
        } else {
            peca2.style.background = "green";
            cor2 = 0;
        }

    }

});
}


// ================= PEÇA 3 =================
const btn3 = document.getElementById("btnAtivar3");
const peca3 = document.getElementById("peca3");
const status3 = document.getElementById("statusTexto3");
const icone3 = document.getElementById("iconePeca3");
const titulo3 = document.getElementById("tituloPeca3");
const texto3 = document.getElementById("textoPeca3");

let ativo3 = false;

btn3.onclick = () => {
    if(!ativo3){
        peca3.classList.replace("bloqueada","ativa");
        status3.innerText = "Ativada";
        status3.style.color = "#22c55e";
        icone3.innerText = "⚡";
        titulo3.innerText = "Peça 3 ativada";
        texto3.innerText = "Você ativou a peça 3";
        btn3.innerText = "Desativar";
        ativo3 = true;
    } else {
        peca3.classList.replace("ativa","bloqueada");
        status3.innerText = "Bloqueada";
        status3.style.color = "#facc15";
        icone3.innerText = "🔒";
        titulo3.innerText = "Bloqueada";
        texto3.innerText = "Aguardando...";
        btn3.innerText = "Ativar";
        ativo3 = false;
    }
};


// ================= PEÇA 4 =================
const btn4 = document.getElementById("btnAtivar4");
const peca4 = document.getElementById("peca4");
const status4 = document.getElementById("statusTexto4");
const icone4 = document.getElementById("iconePeca4");
const titulo4 = document.getElementById("tituloPeca4");
const texto4 = document.getElementById("textoPeca4");

let ativo4 = false;

btn4.onclick = () => {
    if(!ativo4){
        peca4.classList.replace("bloqueada","ativa");
        status4.innerText = "Ativada";
        status4.style.color = "#22c55e";
        icone4.innerText = "⚡";
        titulo4.innerText = "Peça 4 ativada";
        texto4.innerText = "Você ativou a peça 4";
        btn4.innerText = "Desativar";
        ativo4 = true;
    } else {
        peca4.classList.replace("ativa","bloqueada");
        status4.innerText = "Bloqueada";
        status4.style.color = "#facc15";
        icone4.innerText = "🔒";
        titulo4.innerText = "Bloqueada";
        texto4.innerText = "Aguardando...";
        btn4.innerText = "Ativar";
        ativo4 = false;
    }
};


// ================= PEÇA 5 =================
const btn5 = document.getElementById("btnAtivar5");
const peca5 = document.getElementById("peca5");
const status5 = document.getElementById("statusTexto5");
const icone5 = document.getElementById("iconePeca5");
const titulo5 = document.getElementById("tituloPeca5");
const texto5 = document.getElementById("textoPeca5");

let ativo5 = false;

btn5.onclick = () => {
    if(!ativo5){
        peca5.classList.replace("bloqueada","ativa");
        status5.innerText = "Ativada";
        status5.style.color = "#22c55e";
        icone5.innerText = "⚡";
        titulo5.innerText = "Peça 5 ativada";
        texto5.innerText = "Você ativou a peça 5";
        btn5.innerText = "Desativar";
        ativo5 = true;
    } else {
        peca5.classList.replace("ativa","bloqueada");
        status5.innerText = "Bloqueada";
        status5.style.color = "#facc15";
        icone5.innerText = "🔒";
        titulo5.innerText = "Bloqueada";
        texto5.innerText = "Aguardando...";
        btn5.innerText = "Ativar";
        ativo5 = false;
    }
};


// ================= PEÇA 6 =================
const btn6 = document.getElementById("btnAtivar6");
const peca6 = document.getElementById("peca6");
const status6 = document.getElementById("statusTexto6");
const icone6 = document.getElementById("iconePeca6");
const titulo6 = document.getElementById("tituloPeca6");
const texto6 = document.getElementById("textoPeca6");

let ativo6 = false;

btn6.onclick = () => {
    if(!ativo6){
        peca6.classList.replace("bloqueada","ativa");
        status6.innerText = "Ativada";
        status6.style.color = "#22c55e";
        icone6.innerText = "⚡";
        titulo6.innerText = "Peça 6 ativada";
        texto6.innerText = "Você ativou a peça 6";
        btn6.innerText = "Desativar";
        ativo6 = true;
    } else {
        peca6.classList.replace("ativa","bloqueada");
        status6.innerText = "Bloqueada";
        status6.style.color = "#facc15";
        icone6.innerText = "🔒";
        titulo6.innerText = "Bloqueada";
        texto6.innerText = "Aguardando...";
        btn6.innerText = "Ativar";
        ativo6 = false;
    }
};
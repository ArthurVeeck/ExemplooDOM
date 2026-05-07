const contador = document.getElementById("contador");

function atualizarContador(){

    const totalAtivas =
    document.querySelectorAll(".peca.ativa").length;

    contador.innerText = totalAtivas;
}

// ================= PEÇA 1 =================
const botaoAtivar = document.getElementById("btnAtivar");
const peca = document.getElementById("peca");
const statusTexto = document.getElementById("statusTexto");
const iconePeca = document.getElementById("iconePeca");
const tituloPeca = document.getElementById("tituloPeca");
const textoPeca = document.getElementById("textoPeca");

let pecaAtivada = false;

botaoAtivar.onclick = () => {
if(!pecaAtivada){
    peca.classList.replace("bloqueada","ativa");

    statusTexto.innerText = "Ativada";
    statusTexto.style.color = "#22c55e";

    iconePeca.innerText = "🧩";
    tituloPeca.innerText = "Peça ativada";
    textoPeca.innerText = "Você ativou a primeira peça";

    botaoAtivar.disabled = true;
    pecaAtivada = true;
    atualizarContador();
}
};

peca.onclick = () => {
if(pecaAtivada){
    window.location.href = "paginaExplicação.html";
}
};


// ================= PEÇA 2 =================
const btn2 = document.getElementById("btnAtivar2");
const peca2 = document.getElementById("peca2");
const status2 = document.getElementById("statusTexto2");
const icone2 = document.getElementById("iconePeca2");
const titulo2 = document.getElementById("tituloPeca2");
const texto2 = document.getElementById("textoPeca2");

let ativo2 = false;
let cor2 = 0;

btn2.onclick = () => {
if(!ativo2){
    peca2.classList.replace("bloqueada","ativa");

    status2.innerText = "Ativada";
    status2.style.color = "#22c55e";

    icone2.innerText = "🌈";
    titulo2.innerText = "Peça 2 ativada";
    texto2.innerText = "Sistema avançado ativado!";

    btn2.innerText = "Desativar";
    ativo2 = true;
    atualizarContador();

}else{
    peca2.classList.replace("ativa","bloqueada");
    peca2.style.background = "";

    status2.innerText = "Bloqueada";
    status2.style.color = "#facc15";

    icone2.innerText = "🔒";
    titulo2.innerText = "Bloqueada";
    texto2.innerText = "Aguardando...";

    btn2.innerText = "Ativar";
    ativo2 = false;
    atualizarContador();
}
};

// mudança de cor (mantida)
peca2.onclick = () => {
if(ativo2){
    cor2 = (cor2 + 1) % 3;
    peca2.style.background = ["red","blue","green"][cor2];
}
};


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
    peca3.style.background = "linear-gradient(135deg,#2563eb,#60a5fa)";

    status3.innerText = "Ativada";
    status3.style.color = "#60a5fa";

    icone3.innerText = "💧";
    titulo3.innerText = "Peça Azul";
    texto3.innerText = "Energia da água ativada!";

    btn3.innerText = "Desativar";
    ativo3 = true;
    atualizarContador();

}else{
    peca3.classList.replace("ativa","bloqueada");
    peca3.style.background = "";

    status3.innerText = "Bloqueada";
    status3.style.color = "#facc15";

    icone3.innerText = "🔒";
    titulo3.innerText = "Bloqueada";
    texto3.innerText = "Aguardando...";

    btn3.innerText = "Ativar";
    ativo3 = false;
    atualizarContador();
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
    peca4.style.background = "linear-gradient(135deg,#dc2626,#f87171)";

    status4.innerText = "Ativada";
    status4.style.color = "#f87171";

    icone4.innerText = "🔥";
    titulo4.innerText = "Peça Fogo";
    texto4.innerText = "Chamas liberadas!";

    btn4.innerText = "Desativar";
    ativo4 = true;
    atualizarContador();

}else{
    peca4.classList.replace("ativa","bloqueada");
    peca4.style.background = "";

    status4.innerText = "Bloqueada";
    status4.style.color = "#facc15";

    icone4.innerText = "🔒";
    titulo4.innerText = "Bloqueada";
    texto4.innerText = "Aguardando...";

    btn4.innerText = "Ativar";
    ativo4 = false;
    atualizarContador();
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
    peca5.style.background = "linear-gradient(135deg,#16a34a,#4ade80)";

    status5.innerText = "Ativada";
    status5.style.color = "#4ade80";

    icone5.innerText = "🌿";
    titulo5.innerText = "Peça Natureza";
    texto5.innerText = "Força da natureza ativa!";

    btn5.innerText = "Desativar";
    ativo5 = true;
    atualizarContador();

}else{
    peca5.classList.replace("ativa","bloqueada");
    peca5.style.background = "";

    status5.innerText = "Bloqueada";
    status5.style.color = "#facc15";

    icone5.innerText = "🔒";
    titulo5.innerText = "Bloqueada";
    texto5.innerText = "Aguardando...";

    btn5.innerText = "Ativar";
    ativo5 = false;
    atualizarContador();
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
    peca6.style.background = "linear-gradient(135deg,#7c3aed,#c084fc)";

    status6.innerText = "Ativada";
    status6.style.color = "#c084fc";

    icone6.innerText = "⚡";
    titulo6.innerText = "Peça Energia";
    texto6.innerText = "Poder máximo ativado!";

    btn6.innerText = "Desativar";
    ativo6 = true;
    atualizarContador();

}else{
    peca6.classList.replace("ativa","bloqueada");
    peca6.style.background = "";

    status6.innerText = "Bloqueada";
    status6.style.color = "#facc15";

    icone6.innerText = "🔒";
    titulo6.innerText = "Bloqueada";
    texto6.innerText = "Aguardando...";

    btn6.innerText = "Ativar";
    ativo6 = false;
    atualizarContador();
}
};
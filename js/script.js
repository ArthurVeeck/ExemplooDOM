// ======================================
// CONTADOR DE PEÇAS ATIVADAS
// ======================================

const contador =
document.getElementById("contador");

function atualizarContador(){

    const total =
    document.querySelectorAll(".peca.ativa").length;

    contador.innerText = total;
}

// ======================================
// PEÇA 1
// ======================================

const peca1 =
document.getElementById("peca1");

const status1 =
document.getElementById("status1");

const icone1 =
document.getElementById("icone1");

const titulo1 =
document.getElementById("titulo1");

const texto1 =
document.getElementById("texto1");

let ativo1 = false;

peca1.addEventListener("click", function(){

    // ATIVAR
    if(!ativo1){

        peca1.classList.remove("bloqueada");

        peca1.classList.add(
        "ativa",
        "azul"
        );

        status1.innerText =
        "Ativada";

        status1.style.color =
        "#fbff00";

        icone1.innerText = "🌊";

        titulo1.innerText =
        "Peça Água";

        texto1.innerText =
        "Energia da água ativada!";

        ativo1 = true;

        atualizarContador();

    }

    // REDIRECIONAR
    else{

        window.location.href =
        "paginaExplicação.html";
    }

});

// ======================================
// PEÇA 2
// ======================================

const peca2 =
document.getElementById("peca2");

const status2 =
document.getElementById("status2");

const icone2 =
document.getElementById("icone2");

const titulo2 =
document.getElementById("titulo2");

const texto2 =
document.getElementById("texto2");

let ativo2 = false;
let cor2 = 0;

peca2.addEventListener("click", function(){

    // PRIMEIRO CLIQUE = ATIVA
    if(!ativo2){

        peca2.classList.remove("bloqueada");

        peca2.classList.add(
        "ativa",
        "vermelho"
        );

        status2.innerText =
        "Ativada";

        status2.style.color =
        "#fbff00";

        icone2.innerText = "🔥";

        titulo2.innerText =
        "Peça Fogo";

        texto2.innerText =
        "Chamas liberadas!";

        ativo2 = true;

        atualizarContador();

    }

    // PRÓXIMOS CLIQUES = MUDA COR
    else{

        cor2++;

        if(cor2 > 2){
            cor2 = 0;
        }

        // remove cores anteriores
        peca2.classList.remove(
        "vermelho",
        "azul",
        "verde"
        );

        // aplica nova cor
        if(cor2 === 0){

            peca2.classList.add("vermelho");

        }else if(cor2 === 1){

            peca2.classList.add("azul");

        }else{

            peca2.classList.add("verde");
        }

    }

});

// ======================================
// PEÇA 3
// ======================================

const peca3 =
document.getElementById("peca3");

const status3 =
document.getElementById("status3");

const icone3 =
document.getElementById("icone3");

const titulo3 =
document.getElementById("titulo3");

const texto3 =
document.getElementById("texto3");

let ativo3 = false;

peca3.addEventListener("click", function(){

    if(!ativo3){

        peca3.classList.remove("bloqueada");

        peca3.classList.add(
        "ativa",
        "verde"
        );

        status3.innerText =
        "Ativada";

        status3.style.color =
        "#fbff00";

        icone3.innerText = "🌿";

        titulo3.innerText =
        "Peça Natureza";

        texto3.innerText =
        "Força da natureza ativa!";

        ativo3 = true;

    }else{

        peca3.classList.remove(
        "ativa",
        "verde"
        );

        peca3.classList.add(
        "bloqueada"
        );

        status3.innerText =
        "Bloqueada";

        status3.style.color =
        "#facc15";

        icone3.innerText = "🔒";

        titulo3.innerText =
        "Peça Bloqueada";

        texto3.innerText =
        "Aguardando interação...";

        ativo3 = false;
    }

    atualizarContador();

});

// ======================================
// PEÇA 4
// ======================================

const peca4 =
document.getElementById("peca4");

const status4 =
document.getElementById("status4");

const icone4 =
document.getElementById("icone4");

const titulo4 =
document.getElementById("titulo4");

const texto4 =
document.getElementById("texto4");

let ativo4 = false;

peca4.addEventListener("click", function(){

    if(!ativo4){

        peca4.classList.remove("bloqueada");

        peca4.classList.add(
        "ativa",
        "roxo"
        );

        status4.innerText =
        "Ativada";

        status4.style.color =
        "#fbff00";

        icone4.innerText = "⚡";

        titulo4.innerText =
        "Peça Energia";

        texto4.innerText =
        "Poder máximo ativado!";

        ativo4 = true;

    }else{

        peca4.classList.remove(
        "ativa",
        "roxo"
        );

        peca4.classList.add(
        "bloqueada"
        );

        status4.innerText =
        "Bloqueada";

        status4.style.color =
        "#facc15";

        icone4.innerText = "🔒";

        titulo4.innerText =
        "Peça Bloqueada";

        texto4.innerText =
        "Aguardando interação...";

        ativo4 = false;
    }

    atualizarContador();

});

// ======================================
// PEÇA 5
// ======================================

const peca5 =
document.getElementById("peca5");

const status5 =
document.getElementById("status5");

const icone5 =
document.getElementById("icone5");

const titulo5 =
document.getElementById("titulo5");

const texto5 =
document.getElementById("texto5");

let ativo5 = false;

peca5.addEventListener("click", function(){

    if(!ativo5){

        peca5.classList.remove("bloqueada");

        peca5.classList.add(
        "ativa",
        "amarelo"
        );

        status5.innerText =
        "Ativada";

        status5.style.color =
        "#fbff00";

        icone5.innerText = "☀";

        titulo5.innerText =
        "Peça Luz";

        texto5.innerText =
        "Luz intensa liberada!";

        ativo5 = true;

    }else{

        peca5.classList.remove(
        "ativa",
        "amarelo"
        );

        peca5.classList.add(
        "bloqueada"
        );

        status5.innerText =
        "Bloqueada";

        status5.style.color =
        "#facc15";

        icone5.innerText = "🔒";

        titulo5.innerText =
        "Peça Bloqueada";

        texto5.innerText =
        "Aguardando interação...";

        ativo5 = false;
    }

    atualizarContador();

});

// ======================================
// PEÇA 6
// ======================================

const peca6 =
document.getElementById("peca6");

const status6 =
document.getElementById("status6");

const icone6 =
document.getElementById("icone6");

const titulo6 =
document.getElementById("titulo6");

const texto6 =
document.getElementById("texto6");

let ativo6 = false;

peca6.addEventListener("click", function(){

    if(!ativo6){

        peca6.classList.remove("bloqueada");

        peca6.classList.add(
        "ativa",
        "rosa"
        );

        status6.innerText =
        "Ativada";

        status6.style.color =
        "#fbff00";

        icone6.innerText = "👷";

        titulo6.innerText =
        "Peça CLT";

        texto6.innerText =
        "Carteira de Trabalho ativada!";

        ativo6 = true;

    }else{

        peca6.classList.remove(
        "ativa",
        "rosa"
        );

        peca6.classList.add(
        "bloqueada"
        );

        status6.innerText =
        "Bloqueada";

        status6.style.color =
        "#facc15";

        icone6.innerText = "🔒";

        titulo6.innerText =
        "Peça Bloqueada";

        texto6.innerText =
        "Aguardando interação...";

        ativo6 = false;
    }

    atualizarContador();

});
# Introdução ao JavaScript + DOM

---

## Objetivo da Aula

Ao final desta aula, você será capaz de:

- entender o papel do JavaScript no navegador
- compreender o que é o **DOM**
- acessar elementos da página
- reagir a eventos do usuário
- alterar conteúdo e estilo dinamicamente
- criar a primeira peça interativa do projeto

---

# 🧠 O que é o DOM?

## 📌 Definição técnica

DOM significa:

> **Document Object Model (Modelo de Objeto do Documento)**
> 

É a forma como o navegador transforma o HTML em uma **estrutura manipulável pelo JavaScript**.

---

## 🧩 Explicação simples (para aluno iniciante)

Imagine o HTML como uma árvore:

```html
<body>
<h1>Título</h1>
<button>Clique</button>
</body>
```

O navegador transforma isso em:

```
BODY
 ├── H1
 └── BUTTON
```

👉 Isso é o DOM

---

## 🎯 Conclusão importante

JavaScript **não altera o HTML diretamente**

Ele altera o **DOM**, que representa o HTML.

---

# 🧠 Relação entre HTML, CSS e JavaScript

| Tecnologia | Função |
| --- | --- |
| HTML | estrutura |
| CSS | aparência |
| JavaScript | comportamento |
| DOM | ponte entre HTML e JS |

---

# 🔌 Como o JavaScript acessa o DOM

```jsx
// Acessa o documento inteiro (página)
document
```

---

## 📌 Capturando elementos

```jsx
// Busca um elemento pelo ID
document.getElementById("meuId");
```

---

## 🧪 Exemplo completo comentado

```jsx
<h1id = "titulo">Olá</h1>

<script>
// Captura o elemento com ID "titulo"
const titulo = document.getElementById("titulo");

// Altera o texto do elemento
titulo.innerText = "Texto alterado pelo JavaScript";
</script>
```

---

# ⚙️ Eventos

Evento = ação do usuário

Exemplos:

- clique
- digitação
- carregar página

---

## 📌 Evento de clique

```jsx
// Adiciona um evento de clique ao elemento
elemento.addEventListener("click",function () {

// Código executado quando clicar
alert("Clicou!");

});
```

---

# 🧠 Manipulação do DOM

## Alterar texto

```jsx
// Muda o texto do elemento
elemento.innerText = "Novo texto";
```

---

## Alterar estilo

```jsx
// Altera a cor do texto
elemento.style.color = "red";
```

---

## Trabalhar com classes

```jsx
// Remove uma classe CSS
elemento.classList.remove("bloqueada");

// Adiciona uma classe CSS
elemento.classList.add("ativa");
```

---

# 🧠 Variáveis

```jsx
// Cria uma variável que guarda um valor
let ativo = false;
```

---

# 🧠 Estrutura condicional

```jsx
// Executa apenas se a condição for verdadeira
if (ativo === false) {
// ação
}
```

---

# 🧩 Projeto da Aula

## Quebra-Cabeça Interativo — Peça 01

---

# 💻 JavaScript COMPLETO COMENTADO

```jsx
// ================================
// CAPTURA DOS ELEMENTOS DO DOM
// ================================

// Captura o botão pelo ID "btnAtivar"
constbotaoAtivar = document.getElementById("btnAtivar");

// Captura a peça visual
constpeca = document.getElementById("peca");

// Captura o texto de status
conststatusTexto = document.getElementById("statusTexto");

// Captura os elementos internos da peça
consticonePeca = document.getElementById("iconePeca");
consttituloPeca = document.getElementById("tituloPeca");
consttextoPeca = document.getElementById("textoPeca");

// ================================
// ESTADO DA APLICAÇÃO
// ================================

// Variável que controla se a peça já foi ativada
letpecaAtivada = false;

// ================================
// EVENTO DE CLIQUE
// ================================

// Adiciona um evento de clique no botão
botaoAtivar.addEventListener("click",function () {

// Verifica se a peça ainda NÃO foi ativada
if (pecaAtivada === false) {

// Remove a classe "bloqueada"
peca.classList.remove("bloqueada");

// Adiciona a classe "ativa"
peca.classList.add("ativa");

// Atualiza o texto do status
statusTexto.innerText = "Ativada";

// Muda a cor do status
statusTexto.style.color = "#22c55e";

// Altera o ícone da peça
iconePeca.innerText = "🧩";

// Altera o título da peça
tituloPeca.innerText = "Peça Ativada";

// Altera a descrição da peça
textoPeca.innerText = "Parabéns! Você ativou a primeira peça.";

// Altera o texto do botão
botaoAtivar.innerText = "Peça Ativada";

// Desativa o botão para não clicar novamente
botaoAtivar.disabled = true;

// Atualiza o estado da peça
pecaAtivada = true;
  }

});
```

---

# 🧠 O que você aprendeu hoje

- o que é DOM
- como acessar elementos
- como reagir a eventos
- como alterar conteúdo
- como manipular classes
- como usar lógica com JavaScript

let player = document.getElementById("player");
let gameArea = document.getElementById("game-container");
let limiteY = gameArea.clientHeight - player.clientHeight;
let vidaJogador = 100;
let vidaInimigo = 100;
let posX = 260;
let posY = 320;

document.addEventListener("keydown",(e)=> {
   switch (e.key) {
    case "ArrowLeft":
        if (posX - 20 >= 0) posX -=20;
        break;

    case "ArrowRight":
        if (posX + 20 <= 510) posX +=20;
        break;

    case "ArrowUp":
        if (posY - 20 >= 0) posY -=20;
        break;

    case "ArrowDown":
        if (posY + 20 <= limiteY) posY +=20;
        break;

    default:
        break;
   }
    player.style.left = posX + "px";
    player.style.top = posY + "px";
})

function alterarVida(valor) {
    vidaJogador += valor;
    if (vidaJogador > 100) vidaJogador = 100;
    if (vidaJogador < 0) vidaJogador = 0;
    let barra = document.getElementById("vida-player");
    barra.style.width = vidaJogador + "%";
    barra.style.background = vidaJogador > 85 ? 'green' : vidaJogador > 60 ? 'greenyellow' : vidaJogador > 40 ? 'yellow' : vidaJogador > 20 ? 'orange' : 'red';
    if (vidaJogador === 0) document.getElementById("dialogo").innerText = "QUE BETINHA!!!!!! VOCÊ PERDEU!";
}

function abrirLoja() {
    let escolha = confirm("BORA TOMA UMA POR 10 CONTO??");
    if (escolha) alterarVida(30);
}

function ataqueEspecial() {
    vidaInimigo -= 25;
    if (vidaInimigo < 0) vidaInimigo = 0;
    let barra = document.getElementById("vida-inimigo");
    barra.style.width = vidaInimigo + "%";
    document.getElementById("enemy").style.transform = "scale(1.2)";
    setTimeout(() => document.getElementById("enemy").style.transform = "scale(1)", 200);
    if (vidaInimigo === 0)document.getElementById("dialogo").innerText = "TU MATOU O PITBULL CACHORROLOCO!!!";
}
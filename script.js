let vidaJogador = 100;
let vidaInimigo = 100;
let posX = 260;
let posY = 370;

document.addEventListener("keydown",(e)=> {
    if (e.key === "ArrowLeft" && posX > 10) posX -= 20;  
    if (e.key === "ArrowRight" && posX < 510) posX += 20;
    document.getElementById("player").style.left = posX + "px";
    if (e.key === "ArrowUp" && posY > 10) posY -= 20;  
    if (e.key === "ArrowDown" && posY < 300) posY += 20;
    document.getElementById("player").style.top = posY + "px";
})
let player = document.getElementById("player");
let gameArea = document.getElementById("game-container");
let limiteY = gameArea.clientHeight - player.clientHeight;
let vidaJogador = 100;
let vidaInimigo = 100;
let posX = 260;
let posY = 320;

document.addEventListener("keydown",(e)=> {
    /*
    let moved = false;
    if (e.key === "ArrowLeft" && posX > 10) {
        posX -= 20;
        moved = true;
    }
    if (e.key === "ArrowRight" && posX < 510) {
        posX += 20;
        moved = true;
    }

    if (e.key === "ArrowUp" && posY > 10) {
        posY -= 20; 
        moved = true;
    }
    if (e.key === "ArrowDown" && posY < limiteY) {
        posY += 20;
        moved = true;
    }
    if (moved) {
        player.style.left = posX + "px";
        player.style.top = posY + "px";
    }*/
   
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
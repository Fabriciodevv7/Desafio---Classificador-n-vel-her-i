const prompt = require("prompt-sync")();

let nomeHeroi = prompt("Digite o nome do herói: ");
let nivelHeroi = parseInt(prompt("Digite o nível do herói: "));

if (nivelHeroi < 1000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível: Ferro");
}

else if (nivelHeroi < 2000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível: Bronze");
}

else if (nivelHeroi < 5000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível: Prata");
}

else if (nivelHeroi < 7000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível: Ouro");
}

else if (nivelHeroi < 8000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível: Platina");
}

else if (nivelHeroi < 9000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível: Ascendente");
}

else if (nivelHeroi < 10000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível: Imortal");
}

else {
    console.log("O herói de nome " + nomeHeroi + " está no nível: Radiante");
}
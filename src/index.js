const prompt = require("prompt-sync")();

let nomeHeroi = prompt("Digite o nome do herói: ");
let nivelHeroi = prompt("Digite o nível do herói: ");

if (nivelHeroi < 1000) {
    console.log("Olá herói: " + nomeHeroi + " O seu nível é: Ferro");
}

else if (nivelHeroi < 2000) {
    console.log("Olá herói: " + nomeHeroi + " O seu nível é: Bronze");
}

else if (nivelHeroi < 5000) {
    console.log("Olá herói: " + nomeHeroi + " O seu nível é: Prata");
}

else if (nivelHeroi < 7000) {
    console.log("Olá herói: " + nomeHeroi + " O seu nível é: Ouro");
}

else if (nivelHeroi < 8000) {
    console.log("Olá herói: " + nomeHeroi + " O seu nível é: Platina");
}

else if (nivelHeroi < 9000) {
    console.log("Olá herói: " + nomeHeroi + " O seu nível é: Ascendente");
}

else if (nivelHeroi < 10000) {
    console.log("Olá herói: " + nomeHeroi + " O seu nível é: Imortal");
}

else {
    console.log("Olá herói: " + nomeHeroi + " O seu nível é: Radiante");
}
import readlinesync = require("readline-sync");


const numeros: Array<number> = new Array<number>(7, 5, 4, 10, 7, 5, 4, 10, 6, 2);

let numeroSorteado = readlinesync.questionInt("Digite um numero : ");

let indice = numeros.indexOf(numeroSorteado);




if (indice === -1) {
    console.log("Número não encontrado no array!");
} else {
    console.log(`O número ${numeroSorteado} está localizado na posição: ${indice}`)
}









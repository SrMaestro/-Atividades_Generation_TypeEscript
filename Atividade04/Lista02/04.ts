import readlinesync = require("readline-sync");


const numeros: Set<number> = new Set([1,2,3,4,5,6,7,8,9,10]);

let numeroSorteado = readlinesync.questionInt("Digite um numero : ");

if(numeros.has(numeroSorteado)){
    console.log(`O número ${numeroSorteado} foi encontrado!`);
    
}else{
    console.log(`O número ${numeroSorteado} nao  foi  encontrado!`);
    
}


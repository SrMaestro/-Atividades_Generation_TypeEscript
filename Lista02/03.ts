import readlinesync = require("readline-sync");

const limite = 10;
let numeros: Set<number> = new Set<number>();


for (let i = 0; i < limite; i++) {
    const numero = readlinesync.questionInt(`Digite o ${i + 1}º número: `);
    numeros.add(numero);
}

console.log("\n=== Números no conjunto ===");
console.log(Array.from(numeros));




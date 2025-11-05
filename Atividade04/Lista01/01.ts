import readlinesync = require("readline-sync");

const limite = 5
const listaDeCores: Array<string> = new Array<string>()
let cont = 0;

while (cont < limite) {
 
    let cor = readlinesync.question("Digite 5 cores")
    listaDeCores.push(cor)

    cont++
}

console.log(listaDeCores);
console.log(listaDeCores.sort());


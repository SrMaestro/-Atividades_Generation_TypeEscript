import { Queue } from "./Queue";
import readlinesync = require("readline-sync");

const fila = new Queue<string>();

console.log("1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.");
console.log("2: Listar todos os Clientes na fila");
console.log("3: Chamar (retirar) uma pessoa da fila ");
console.log("0: Sair. ");


let escolha: number;

do {
    console.log("\n=== Menu de Opções ===");
    escolha = readlinesync.questionInt("Digite uma opção: ");

    switch (escolha) {
        case 1:
            let nome = readlinesync.question("Digite o nome do cliente: ");
            fila.enqueue(nome);
            fila.printQueue();
            console.log("Cliente Adicionado!");
            break;
        case 2:
            if (fila.isEmpty()) {
                console.log("Lista Vazia");
            } else {
                fila.printQueue();
            }
            break;
        case 3:
            if (fila.isEmpty()) {
                console.log("Lista Vazia");
            } else {
                fila.dequeue();
                fila.printQueue();
            }
            break;
        case 0:
            console.log("Programa Finalizado");
            break;
        default:
            console.log("Digite um valor válido");
            break;
    }
} while (escolha !== 0);


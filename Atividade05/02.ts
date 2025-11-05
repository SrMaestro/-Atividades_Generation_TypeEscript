
import { Stack } from "./Stack";
import readlinesync = require("readline-sync");

const pilha = new Stack<string>();

console.log("1: Adicionar Livro na  pilha.");
console.log("2: Listar todos os livros");
console.log("3: retirar livros da pilha");
console.log("0: Sair ");


let escolha: number;

do {
    console.log("\n=== Menu de Opções ===");
    escolha = readlinesync.questionInt("Digite uma opção: ");

    switch (escolha) {
        case 1:
            let nome = readlinesync.question("Digite o nome do livro: ");
            pilha.push(nome);
            pilha.printStack();
            console.log("Livro Adicionado!");
            break;
        case 2:
            if (pilha.isEmpty()) {
                console.log("Lista Vazia");
            } else {
                pilha.printStack();
            }
            break;
        case 3:
            if (pilha.isEmpty()) {
                console.log("Lista Vazia");
            } else {
                pilha.pop();
                pilha.printStack();
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


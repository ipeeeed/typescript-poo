"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Personagem_1 = __importDefault(require("./Personagem"));
const prompt_sync_1 = __importDefault(require("prompt-sync"));
// let mage: Person = new Mage("Faísca");
// let warrior: Person = new Warrior("Muralha");
// let priest: Person = new Priest("LadraHobbit");
// const personagens: Person[] = [];
// personagens.forEach((p) => console.log(p.atacar()));
let person = new Personagem_1.default("Guerreiro", "Pedro Matos", 50, 20, 10, 60);
let teclado = (0, prompt_sync_1.default)();
let option = 0;
while (option != 9 || person.isDead()) {
    console.log(`+======== Personagem ${person.nome} ========+`);
    console.log('|          1. Treinar ataque           |');
    console.log('|          2. Treinar defesa           |');
    console.log('|          3. Descansar                |');
    console.log('|          4. Entrar em batalha        |');
    console.log('|          8. Imprimir atributos       |');
    console.log('|          9. Sair                     |');
    console.log('+======================================+');
    option = +teclado('Escolha uma ação: ');
    switch (option) {
        case 1:
            person.treinarAtaque();
            person.status();
            break;
        case 2:
            person.treinarDefesa();
            person.status();
            break;
        case 3:
            let horas = +teclado('Digite o número de horas: ');
            person.descansar(horas);
            person.status();
            break;
        case 4:
            let rest = person.batalhar();
            console.log(`Esta batalha custou ${rest} de energia`);
            person.status();
            break;
        case 8:
            person.status();
            break;
        default:
            break;
    }
}

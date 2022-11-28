"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mage_1 = require("./Mage");
const Warrior_1 = require("./Warrior");
const Priest_1 = require("./Priest");
let mage = new Mage_1.Mage("Faísca");
let warrior = new Warrior_1.Warrior("Muralha");
let priest = new Priest_1.Priest("LadraHobbit");
console.log(mage);
console.log(warrior);
console.log(priest);
/*
import Personagem from "./Personagem";
import prompt from "prompt-sync";

let person: Personagem = new Personagem("Guerreiro", "Pedro Matos", 50, 20, 10, 70);

let teclado = prompt();
let option: number = 0;
while(option != 9 || person.isDead()) {
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
            let horas: number = +teclado('Digite o número de horas: ')
            person.descansar(horas);
            person.status();
            break;
        case 4:
            let rest: number = person.batalhar();
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
*/ 

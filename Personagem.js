"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Personagem {
    constructor(classe, _nome, energia, vida, ataque, defesa) {
        this.classe = classe;
        this._nome = _nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    // Toda vez que pensar em ler dados na classe - Use parâmetros
    // Toda vez que pensar em imprimir na classe - Use retornos
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    status() {
        return (`
        Classe: ${this.classe}
        Nome: ${this.nome}
        Energia: ${this.energia.toFixed(0)}
        Vida: ${this.vida.toFixed(0)}
        Ataque: ${this.ataque.toFixed(0)}
        Defesa: ${this.defesa.toFixed(0)}
        `);
    }
    treinarAtaque() {
        this.ataque += this.randomizar(7);
        this.energia -= this.randomizar(10);
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    }
    treinarDefesa() {
        this.defesa += this.randomizar(5);
        this.energia -= this.randomizar(10);
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    }
    descansar(hour) {
        this.energia += hour * this.randomizar(10);
        if (this.energia > 100) {
            this.energia = 100;
        }
    }
    batalhar() {
        let desgaste = this.randomizar(10);
        this.energia -= desgaste;
        return desgaste;
    }
    isDead() {
        return this.energia < 0;
    }
    randomizar(fator) {
        return Math.random() * fator;
    }
}
exports.default = Personagem;

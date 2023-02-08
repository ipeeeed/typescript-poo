"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Priest = void 0;
const Person_1 = require("./Person");
const Util_1 = require("./Util");
class Priest extends Person_1.Person {
    constructor(nome) {
        super(nome);
        this._espirito = Util_1.Util.randomizar(100, 1000);
        this._versatilidade = Util_1.Util.randomizar(100, 1000);
    }
    atacar() {
        return "Ataque do Padre";
    }
    defender(atacante) {
        throw new Error("Method not implemented.");
    }
}
exports.Priest = Priest;

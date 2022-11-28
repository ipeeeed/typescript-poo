"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
const Person_1 = require("./Person");
const Util_1 = require("./Util");
class Mage extends Person_1.Person {
    constructor(nome) {
        super(nome);
        this._intelecto = Util_1.Util.randomizar(100, 1000);
        this._velocidade = Util_1.Util.randomizar(10, 2000);
    }
}
exports.Mage = Mage;

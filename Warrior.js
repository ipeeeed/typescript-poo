"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
const Person_1 = require("./Person");
const Util_1 = require("./Util");
class Warrior extends Person_1.Person {
    constructor(nome) {
        super(nome);
        this._forca = Util_1.Util.randomizar(100, 1000);
        this._agilidade = Util_1.Util.randomizar(100, 1000);
    }
}
exports.Warrior = Warrior;

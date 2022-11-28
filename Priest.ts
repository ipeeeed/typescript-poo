import { Person } from "./Person";
import { Util } from "./Util";

export class Priest extends Person {
    private _espirito: number;
    private _versatilidade: number;

    constructor(nome: string) {
        super(nome);
        this._espirito = Util.randomizar(100, 1_000);
        this._versatilidade = Util.randomizar(100, 1_000);
    }
}
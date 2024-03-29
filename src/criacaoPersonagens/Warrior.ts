import { Person } from "./Person";
import { Util } from "./Util";

export class Warrior extends Person {

    private _forca: number;
    private _agilidade: number;

    constructor(nome: string) {
        super(nome);
        this._forca = Util.randomizar(100, 1_000);
        this._agilidade = Util.randomizar(100, 1_000);
    }

    public atacar(): string {
        return "Ataque do Guerreiro";
    }
    public defender(atacante: Person): number {
        throw new Error("Method not implemented.");
    }
}
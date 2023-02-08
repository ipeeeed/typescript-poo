import { Person } from "./Person";
import { Util } from "./Util";

export class Mage extends Person {

    private _intelecto: number;
    private _velocidade: number;

    constructor(nome: string) {
        super(nome);
        this._intelecto = Util.randomizar(100, 1_000);
        this._velocidade = Util.randomizar(10, 2_000);
    }

    public atacar(): string {
        return "Ataque do Mago";
    }
    public defender(atacante: Person): number {
        throw new Error("Method not implemented.");
    }
}
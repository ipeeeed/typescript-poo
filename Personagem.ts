
export default class Personagem {
    constructor(
        private classe: string,
        private _nome: string,
        private energia: number,
        private vida: number,
        private ataque: number,
        private defesa: number,
        ) {}
// Toda vez que pensar em ler dados na classe - Use parâmetros
// Toda vez que pensar em imprimir na classe - Use retornos

    
    public get nome() : string {
        return this._nome;
    }
    
    public set nome(nome : string) {
        this._nome = nome;
    }

    public status(): string {
        return (`
        Classe: ${this.classe}
        Nome: ${this.nome}
        Energia: ${this.energia.toFixed(0)}
        Vida: ${this.vida.toFixed(0)}
        Ataque: ${this.ataque.toFixed(0)}
        Defesa: ${this.defesa.toFixed(0)}
        `);
    }

    public treinarAtaque(): void {
        this.ataque += this.randomizar(7);
        this.energia -= this.randomizar(10);
        if(this.defesa > 100) {
            this.defesa = 0;
        }
    }

    public treinarDefesa(): void {
        this.defesa += this.randomizar(5);
        this.energia -= this.randomizar(10);
        if(this.defesa > 100) {
            this.defesa = 0;
        }
    }

    public descansar(hour: number): void {
        this.energia += hour * this.randomizar(10);
        if (this.energia > 100) {
            this.energia = 100;
        }
    }

    public batalhar(): number {
        let desgaste: number = this.randomizar(10);
        this.energia -= desgaste;
        return desgaste;
    }

    public isDead(): boolean {
        return this.energia < 0;
    }

    private randomizar(fator: number): number {
        return Math.random() * fator;
    }
}

export default class Szavazatok {
    private _sorszam: number;
    private _szavazatokszama: number;
    private _nev: string;
    private _partnev: string;

    public get sorszam(): number {
        return this._sorszam;
    }
    public get szavazatokszama(): number {
        return this._szavazatokszama;
    }

    public get nev(): string {
        return this._nev;
    }

    public get partnev(): string {
        return this._partnev;
    }

    constructor(adatok: string) {
        const s: string[] = adatok.split(" ");
        this._sorszam = parseInt(s[0]);
        this._szavazatokszama = parseInt(s[1]);
        this._nev = s[2] + " " + s[3];
        this._partnev = s[4];
        //asd
    }
}

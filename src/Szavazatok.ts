export default class Szavazatok {
    private _sorszam: number;
    private _szavazatokszama: number;
    private _vnev: string;
    private _knev: string;
    private _partnev: string;

    public get sorszam(): number {
        return this._sorszam;
    }
    public get szavazatokszama(): number {
        return this._szavazatokszama;
    }
    public get vnev(): string {
        return this._vnev;
    }
    public get knev(): string {
        return this._knev;
    }
    public get partnev(): string {
        return this._partnev;
    }
    constructor(adatok: string) {
        const s: string[] = adatok.split(" ");
        this._sorszam = parseInt(s[0]);
        this._szavazatokszama = parseInt(s[1]);
        this._vnev = s[2];
        this._knev = s[3];
        this._partnev = s[4];
        //asd
    }
}

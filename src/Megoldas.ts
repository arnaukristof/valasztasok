import fs from "fs";
import Szavazatok from "./Szavazatok";

export default class Megoldas {
    private _szavazatok: Szavazatok[] = [];

    public get szavazatok(): Szavazatok[] {
        return this._szavazatok;
    }

    public get kepviselokSzama(): number {
        return this._szavazatok.length;
    }

    public get elsokepviselo(): string {
        return this._szavazatok[0].nev;
    }
    //public get szavazatokszama(): number {}

    /*public get partSzavazat(): number {
        let osszSzavazat = 0;
        for(const i of sz)
        {
            osszSzavazat += this._szavazatok.
        }
    }*/

    constructor(forras: string) {
        fs.readFileSync(forras)
            .toString()
            .split("\n")
            .forEach(i => {
                const aktSor = i.trim();
                if (aktSor.length > 0) this._szavazatok.push(new Szavazatok(aktSor));
            });
    }
}

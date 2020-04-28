import fs from "fs";
import Szavazatok from "./Szavazatok";

export default class Megoldas {
    private _szavazatok: Szavazatok[] = [];

    public get jogosultak(): number {
        return 12345;
    }

    public get szavazatok(): Szavazatok[] {
        return this._szavazatok;
    }

    public get kepviselokSzama(): number {
        return this._szavazatok.length;
    }

    public nevKeres(bekert: string): string {
        let joBekert = "";
        for (const i of this._szavazatok) {
            if (bekert == i.nev) {
                joBekert = i.nev;
            }
        }
        return joBekert;
    }

    public kepviseloSzavazatai(bekert: string): number {
        let szSzam = 0;
        for (const i of this._szavazatok) {
            if (bekert == i.nev) {
                szSzam = i.szavazatokszama;
            }
        }
        return szSzam;
    }

    public get szavazatiArany(): number {
        let szavazatokSZ = 0;
        for (const i of this._szavazatok) {
            szavazatokSZ += i.szavazatokszama;
        }
        return (this.jogosultak / szavazatokSZ) * 100;
    }

    public get osszSzavazat(): number {
        let szam = 0;
        for (const i of this._szavazatok) {
            szam += i.szavazatokszama;
        }
        return szam;
    }

    public partSzavazatokArany(part: string): number {
        let partSzavazat = 0;
        for (const i of this._szavazatok) {
            if (part == i.partnev) {
                partSzavazat += i.szavazatokszama;
            }
        }
        return (partSzavazat / this.osszSzavazat) * 100;
    }

    public get legtobbSzavazat(): number {
        let max = -1;
        for (const i of this._szavazatok) {
            if (i.szavazatokszama > max) {
                max = i.szavazatokszama;
            }
        }
        return max;
    }
    public get legtobbSzavazatotSzerzett(): string {
        let kepviselo = "";
        for (const i of this._szavazatok) {
            if (this.legtobbSzavazat == i.szavazatokszama) {
                kepviselo = i.nev;
            }
        }
        return kepviselo;
    }

    public get partNev(): string {
        let part = "";
        for (const i of this._szavazatok) {
            if (i.nev == this.legtobbSzavazatotSzerzett && i.partnev != "-") {
                part = i.partnev;
            } else {
                part = "független";
            }
        }
        return part;
    }

    public constructor(forras: string) {
        fs.readFileSync(forras)
            .toString()
            .split("\n")
            .forEach(i => {
                const aktSor = i.trim();
                if (aktSor.length > 0) this._szavazatok.push(new Szavazatok(aktSor));
            });
    }
}

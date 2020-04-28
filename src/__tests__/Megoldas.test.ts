import Megoldas from "../Megoldas";

describe("Megoldás osztály unit tesztek", () => {
    const instance: Megoldas = new Megoldas("szavazatok.txt");

    it("Megoldás osztálypéldány ellenőrzése", async () => {
        expect(instance).toBeInstanceOf(Megoldas);
    });

    it("Képviselők száma", async () => {
        expect(instance.kepviselokSzama).toBe(40);
    });

    it("Szavazati arány", async () => {
        expect(instance.szavazatiArany).toBe(261.94);
    });

    it("Összes szavazat száma", async () => {
        expect(instance.osszSzavazat).toBe(4713);
    });

    it("Legtöbb szavazat száma", async () => {
        expect(instance.legtobbSzavazat).toBe(288);
    });

    it("Legtöbb szavazatot szerzett képviselő megnevezése", async () => {
        expect(instance.legtobbSzavazatotSzerzett).toBe("Vadas Marcell");
    });

    it("Legtöbb szavazatot szerzett képviselő párjának a megnevezése", async () => {
        expect(instance.partNev).toBe("független");
    });
});

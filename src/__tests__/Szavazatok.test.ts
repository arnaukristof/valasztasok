import Szavazatok from "../Szavazatok";

describe("Szavazatok osztály unit tesztek: ", () => {
    const instance: Szavazatok = new Szavazatok("8 98 Languszta Auguszta -");

    it("Szavazatok osztálypéldány ellenőrzése", async () => {
        expect(instance).toBeInstanceOf(Szavazatok);
    });
});

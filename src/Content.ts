import fs from "fs";
import http from "http";
import Megoldas from "./Megoldas";
import url from "url";
import Szavazatok from "./Szavazatok";

interface InputInterface {
    name: string;
    age: number;
    male: boolean;
}
export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Jedlik Ts Template</title>");
        res.write("</head>");
        res.write("<body><form><pre>");

        // Kezd a kódolást innen -->

        //1. feladat: fájlok beolvasása

        const megoldas: Megoldas = new Megoldas("szavazatok.txt");

        //2. feladat: a választáson indult képviselők számának meghatározása

        res.write(`2. Feladat: A helytartósági választáson ${megoldas.kepviselokSzama} képviselőjelölt indult.<br>`);

        //3. feladat: képviselő nevének bekérése, ha nem szerepel ilyen név, megfelelő válaszüzenet megjelenítése

        const u = url.parse(req.url as string, true).query;
        let bekertNev: string = u.bekertNev as string;
        if (bekertNev === "") {
            bekertNev = megoldas.elsokepviselo;
        }
        res.write(`3. Feladat: Adja megy egy képviselő nevét: <input type='text' name='bekertNev' value=${bekertNev} style='width: 12em';>\n`);

        //4. feladat:

        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}

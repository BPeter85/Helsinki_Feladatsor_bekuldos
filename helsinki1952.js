var eredmenyek = [
    "1 1 atletika kalapacsvetes",
    "1 1 uszas 400m_gyorsuszas",
    "1 1 birkozas kotott_fogas_legsuly",
    "1 1 torna talajtorna",
    "1 1 torna felemas_korlat",
    "1 1 vivas kardvivas_egyeni",
    "1 1 okolvivas nagyvaltosuly",
    "1 1 uszas 200m_melluszas",
    "1 1 birkozas kotott_fogas_valtosuly",
    "1 1 uszas 100m_gyorsuszas",
    "1 1 sportloveszet onmukodo_sportpisztoly",
    "1 15 labdarugas ferfi_csapat",
    "1 3 ottusa ferfi_csapat",
    "1 6 vivas kardvivas_csapat",
    "1 5 uszas 4x100m_gyorsuszo_valto",
    "1 13 vizilabda ferfi_csapat",
    "2 1 ottusa ottusa_egyeni",
    "2 1 vivas torvivas_egyeni",
    "2 1 vivas kardvivas_egyeni",
    "2 1 sportloveszet onmukodo_sportpisztoly",
    "2 1 uszas 400m_gyorsuszas",
    "2 1 uszas 200m_melluszas",
    "2 1 kajakkenu kenu_egyes_10000m",
    "2 1 kajakkenu kajak_egyes_1000m",
    "2 1 birkozas kotott_fogas_pehelysuly",
    "2 8 torna noi_osszetett_csapat",
    "3 1 sportloveszet sportpisztoly",
    "3 1 vivas kardvivas_egyeni",
    "3 1 atletika tavolugras",
    "3 1 birkozas szabad_fogas_kozepsuly",
    "3 1 torna felemas_korlat",
    "3 1 torna osszetett_egyeni",
    "3 1 torna gerenda",
    "3 1 torna talajtorna",
    "3 1 atletika kalapacsvetes",
    "3 1 atletika 50km_gyaloglas",
    "3 1 ottusa ottusa_egyeni",
    "3 1 uszas 100m_gyorsuszas",
    "3 4 atletika 4x100m_valtofutas",
    "3 2 kajakkenu kenu_kettes_10000m",
    "3 8 torna keziszer_csapat",
    "3 6 vivas torvivas_csapat",
    "4 1 torna gerenda",
    "4 1 uszas 200m_mell",
    "4 1 birkozas kotottfogas_felnehezsuly",
    "4 1 torna talaj",
    "4 1 birkozas kotottfogas_kozepsuly",
    "4 1 birkozas kotottfogas_konnyusuly",
    "5 1 okolvivas pehelysuly",
    "5 1 okolvivas konnyusuly",
    "5 1 uszas 100m_gyors",
    "5 1 atletika diszkoszvetes",
    "5 1 vivas parbajtor_egyeni",
    "5 2 kajak kenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4 200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajak kenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat",
];
function helsinkiObjektum(elemek) {
    var beolvasottAdatok = [];
    for (var i = 0; i < elemek.length; i++) {
        var daraboltSor = elemek[i].split(" ");
        var objektum = {
            helyezes: Number(daraboltSor[0]),
            sportolokSzama: Number(daraboltSor[1]),
            sportag: daraboltSor[2],
            vesenyszam: daraboltSor[3]
        };
        beolvasottAdatok.push(objektum);
    }
    return beolvasottAdatok;
}
var helsinkiAdatok = helsinkiObjektum(eredmenyek);
/*
function adatokKiirasa(adatok:helsinki52Elem[]):void{
   for(let i:number = 0; i < adatok.length;i++){
       console.log(adatok[i].helyezes+" ; "+adatok[i].sportolokSzama+" ; "+adatok[i].sportag+" ; "+adatok[i].vesenyszam+" ;");
   }
}

adatokKiirasa(helsinkiAdatok);
*/
// 3. feladat
function pontszerzo(adatok) {
    console.log("3. feladat:" + '\n' + "Pontszerző helyezések száma: " + adatok.length);
}
pontszerzo(helsinkiAdatok);
// 4. feladat
function ermekSzama(adatok) {
    var aranydb = 0;
    var ezüstdb = 0;
    var bronzdb = 0;
    for (var i = 0; i < adatok.length; i++) {
        if (adatok[i].helyezes == 1) {
            aranydb++;
        }
        else if (adatok[i].helyezes == 2) {
            ezüstdb++;
        }
        else if (adatok[i].helyezes == 3) {
            bronzdb++;
        }
    }
    var osszesdb = aranydb + ezüstdb + bronzdb;
    console.log("4. feladat:" + '\n' + "Arany: " + aranydb + '\n' + "Ezüst: " + ezüstdb + '\n' + "Bronz: " + bronzdb + '\n' + "össesen: " + osszesdb);
}
ermekSzama(helsinkiAdatok);
// 5. feladat
function olimpiaiPontokOsszesen(adatok) {
    var pontok = 0;
    for (var i = 0; i < adatok.length; i++) {
        if (adatok[i].helyezes == 1) {
            pontok += 7;
        }
        if (adatok[i].helyezes == 2) {
            pontok += 5;
        }
        if (adatok[i].helyezes == 3) {
            pontok += 4;
        }
        if (adatok[i].helyezes == 4) {
            pontok += 3;
        }
        if (adatok[i].helyezes == 5) {
            pontok += 2;
        }
        if (adatok[i].helyezes == 6) {
            pontok += 1;
        }
    }
    console.log("5. feladat:" + '\n' + "Olimpiai pontok száma: " + pontok);
}
olimpiaiPontokOsszesen(helsinkiAdatok);
// 6. feladat
function uszasTornaTobbErem(adatok) {
    var uszasdb = 0;
    var tornadb = 0;
    for (var i = 0; i < adatok.length; i++) {
        if (adatok[i].sportag == "uszas") {
            uszasdb++;
        }
        else if (adatok[i].sportag == "torna") {
            tornadb++;
        }
    }
    if (uszasdb > tornadb) {
        console.log("6. feladat:" + '\n' + "Úszás sportágban szereztek több érmet.");
    }
    else if (uszasdb < tornadb) {
        console.log("6. feladat:" + '\n' + "Torna sportágban szereztek több érmet.");
    }
    else if (uszasdb == tornadb) {
        console.log("6. feladat:" + '\n' + "Egyenlő volt az érmek száma.");
    }
}
uszasTornaTobbErem(helsinkiAdatok);
// 7. feladat
function legtobbPontszerzoStatisztika(adatok) {
    var maxIndex = 0;
    for (var i = 0; i < adatok.length; i++) {
        if (adatok[i].sportolokSzama > adatok[maxIndex].sportolokSzama) {
            maxIndex = i;
        }
    }
    console.log("7. feladat:" + '\n' + "Helyezes: " + adatok[maxIndex].helyezes + '\n' + "Sportág: " + adatok[maxIndex].sportag + '\n' + "Versenyszám: " + adatok[maxIndex].vesenyszam + '\n' + "Sportolók száma: " + adatok[maxIndex].sportolokSzama + '\n');
}
legtobbPontszerzoStatisztika(helsinkiAdatok);

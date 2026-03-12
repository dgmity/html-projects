let auta = ["BMW", "Audi", "Opel", "Skoda", "Mercedes"];

function wyswietl(tekst) {
    document.getElementById("wynik").innerHTML = tekst;
}

function pokazTablice() {
    wyswietl(auta.join(", "));
}

function dodajPush() {
    let nazwa = document.getElementById("noweAuto").value;
    if (nazwa) {
        auta.push(nazwa);
        pokazTablice();
    }
}

function usunPop() {
    auta.pop();
    pokazTablice();
}

function dodajUnshift() {
    let nazwa = document.getElementById("noweAuto").value;
    if (nazwa) {
        auta.unshift(nazwa);
        pokazTablice();
    }
}

function usunShift() {
    auta.shift();
    pokazTablice();
}

function sprawdzSkoda() {
    if (auta.includes("Skoda")) {
        wyswietl("Skoda jest w tablicy");
    } else {
        wyswietl("Skody nie ma w tablicy");
    }
}

function sortuj() {
    auta.sort();
    pokazTablice();
}

function pierwszaPozycja() {
    wyswietl("Pierwszy element: " + auta[0]);
}

function liczbaElementow() {
    wyswietl("Liczba elementów: " + auta.length);
}

function pierwszaIDruga() {
    if (auta.length >= 2) {
        wyswietl("Pierwsza: " + auta[0] + ", Druga: " + auta[1]);
    } else {
        wyswietl("Za mało elementów w tablicy.");
    }
}

function wOddzielnychLiniach() {
    wyswietl(auta.join("<br>"));
}
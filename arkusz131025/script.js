document.addEventListener('DOMContentLoaded', function () {
    // Pobranie elementów (uważaj na wielkość liter — ID muszą się zgadzać z HTML)
    const formularz = document.getElementById("formularz");
    const poleTekstowe = document.getElementById("nowezadanie"); // matches your HTML
    const lista = document.getElementById("listazadan");         // matches your HTML

    if (!formularz || !poleTekstowe || !lista) {
        console.error("Brak wymaganych elementów DOM: formularz/nowezadanie/listazadan");
        return;
    }

    // Funkcja przekreślająca tekst po kliknięciu "Wykonane"
    function oznaczJakoWykonane(event) {
        const przycisk = event.currentTarget;
        const elementListy = przycisk.closest('li');
        if (!elementListy) return;
        // jeśli już przekreślone — nic nie rób lub odznacz w razie potrzeby
        if (elementListy.style.textDecoration === 'line-through') return;
        elementListy.style.textDecoration = "line-through";
    }

    // Przypisz funkcję do istniejących przycisków (jeśli są)
    const przyciskiPoczatkowe = lista.querySelectorAll("button");
    przyciskiPoczatkowe.forEach(btn => {
        // usuń inline onclick w HTML, a jeśli są — nadpisujemy bezpiecznie
        btn.removeAttribute('onclick');
        btn.addEventListener("click", oznaczJakoWykonane);
    });

    // Funkcja dodająca nowe zadanie
    function dodajZadanie(event) {
        event.preventDefault(); // powstrzymuje odświeżenie strony

        const tekstZadania = poleTekstowe.value.trim();
        if (tekstZadania === "") {
            // opcjonalnie: alert("Wpisz treść zadania");
            return;
        }

        // Utwórz nowy element <li>
        const noweLi = document.createElement("li");

        // Wstaw treść (bez <p>, zgodnie z Twoim HTML możesz użyć <p> jeśli chcesz)
        const paragraf = document.createElement('p');
        paragraf.textContent = tekstZadania;
        paragraf.style.margin = '0'; // estetyka

        // Utwórz przycisk
        const nowyPrzycisk = document.createElement("button");
        nowyPrzycisk.type = "button";
        nowyPrzycisk.textContent = "Wykonane";
        nowyPrzycisk.addEventListener("click", oznaczJakoWykonane);

        // Dodaj elementy do li (zachowujemy strukturę: <p>tekst</p><button>...)
        noweLi.appendChild(paragraf);
        noweLi.appendChild(nowyPrzycisk);

        // Dodaj element do listy
        lista.appendChild(noweLi);

        // Wyczyść pole tekstowe
        poleTekstowe.value = "";
    }

    // Obsługa przycisku „Dodaj”
    formularz.addEventListener("submit", dodajZadanie);
});

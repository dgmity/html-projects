function showPrice() {
    const display = document.querySelector("#display-price");
    const btn = document.querySelector("#calculate-btn");

    btn.addEventListener("click" , () => {
        const selected = document.querySelector('input[name="hair"]:checked');

        if (selected) {
            display.textContent = "Cena promocyjna: " + (selected.value - 10);
        } 
    })
}

showPrice();
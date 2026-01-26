function countTotal() {
    const btn = document.querySelector("#run-btn");
    const display = document.querySelector("#price-display");

    btn.addEventListener("click", () => {
        let total_value = 0;

        document.querySelectorAll("input[name='services']:checked").forEach(
            (element) => {
                total_value += Number(element.value);
            }
        )

        display.textContent = "Cena zabiegów: " + total_value;
    })
}

countTotal();
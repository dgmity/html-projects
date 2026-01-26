function calculateInstallments() {
    const btn = document.querySelector("#show-result");
    const display = document.querySelector("#display");

    btn.addEventListener("click", () => {
        let total_sum = 0;

        document.querySelectorAll("input[name='course']:checked").forEach((value) => {
            total_sum += Number(value.value);
        })

        let installment = total_sum / document.querySelector("#inp3").value;

        display.textContent = "Kurs odbędzie się w " + (document.querySelector("#inp4").value) + ". Koszt całkowity: " + total_sum + "zł. Płacisz " + (document.querySelector("#inp3").value) + " rat po " + installment;
    })
}

calculateInstallments();
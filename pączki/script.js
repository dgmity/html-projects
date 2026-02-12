function caloriesCounter() {
    const btn = document.querySelector('#btn1');
    const display = document.querySelector('#display');

    btn.addEventListener("click", () => {
        let total_calories = 0;

        total_calories += Number(document.querySelector("#donut-type").value);

        document.querySelectorAll("input[name='additional']:checked").forEach((checkd) =>{
            total_calories += Number(checkd.value);
        })

        total_calories *= Number(document.querySelector('#amount').value);

        if (total_calories < 2000) {
            display.textContent = `Smacznego! Zjadasz ${total_calories} kcal`;
        } 
        else if (total_calories > 2000) {
            display.textContent = `Ty tłuściouszku to zadużo! ${total_calories} kcal`;
        }
    })
}

caloriesCounter();
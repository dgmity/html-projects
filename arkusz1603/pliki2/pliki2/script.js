function writeAnswer() {
    const chat = document.getElementById('chat');
    const inputElement = document.getElementById('inp1');
    const text = inputElement.value;

    if (text.trim() === "") return;

    chat.insertAdjacentHTML('beforeend', `
        <div class="wyp_j">
            <img src="Jolka.jpg" alt="Avatar">
            <p>${text}</p>
        </div>
    `);

    inputElement.value = '';
}

function generateRandomAnswer() {
    let answers = [
        "Świetnie!",
        "Kto gra główną rolę?",
        "Lubisz filmy Tego reżysera?",
        "Będę 10 minut wcześniej",
        "Może kupimy sobie popcorn?",
        "Ja wolę Colę",
        "Zaproszę jeszcze Grześka",
        "Tydzień temu też byłem w kinie na Diunie",
        "Ja funduję bilety"
    ];

    let randomIndex = Math.floor(Math.random() * answers.length);
    let selected_answer = answers[randomIndex];

    const chat = document.getElementById('chat');

    chat.insertAdjacentHTML('beforeend', `
        <div class="wyp_k">
            <img src="Krzysiek.jpg" alt="Krzysiek">
            <p>${selected_answer}</p>
        </div>
    `);
}
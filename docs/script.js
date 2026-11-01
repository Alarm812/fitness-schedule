
const trainings = [
    {
        name: "Йога",
        date: "2026-11-02",
        time: "09:00",
        type: "Розтяжка"
    },
    {
        name: "Силове тренування",
        date: "2026-11-02",
        time: "11:00",
        type: "Силове"
    },
    {
        name: "Пілатес",
        date: "2026-11-03",
        time: "10:00",
        type: "Розтяжка"
    },
    {
        name: "Кардіо",
        date: "2026-11-03",
        time: "18:00",
        type: "Кардіо"
    },
    {
        name: "Функціональне тренування",
        date: "2026-11-04",
        time: "17:00",
        type: "Функціональне"
    }
];

const trainingList = document.getElementById("trainingList");
const searchInput = document.getElementById("searchInput");

function displayTrainings(trainingArray) {
    trainingList.innerHTML = "";

    if (trainingArray.length === 0) {
        trainingList.innerHTML = "<p>Тренувань не знайдено.</p>";
        return;
    }

    trainingArray.forEach(training => {
        const card = document.createElement("div");
        card.className = "training-card";

        card.innerHTML = `
            <h3>${training.name}</h3>
            <p>Дата: ${training.date}</p>
            <p>Час: ${training.time}</p>
            <p>Тип: ${training.type}</p>
        `;

        trainingList.appendChild(card);
    });
}

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    const filteredTrainings = trainings.filter(training =>
        training.name.toLowerCase().includes(searchText)
    );

    displayTrainings(filteredTrainings);
});

displayTrainings(trainings);

import GameSavingLoader from "./gamesaver"

GameSavingLoader.load()
    .then((saving) => {
        console.log(saving); // объект типа GameSaving
    })
    .catch((error) => {
        console.error(error); // обработка ошибки
    });
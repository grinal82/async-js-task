import GameSavingLoader from "./gamesaver.js";

(async () => {
    try {
        const gameSaving = await GameSavingLoader.load();
        console.log(gameSaving);
    } catch (error) {
        console.error(error);
    }
})();

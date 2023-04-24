import GameSavingLoader from "../async/gamesaver.js";

describe("GameSavingLoader async test", () => {
    test("should load game data", async () => {
        const saving = await GameSavingLoader.load();
        expect(saving).toEqual({
            id: 9,
            created: 1546300800,
            userInfo: {
                id: 1,
                name: "Hitman",
                level: 10,
                points: 2000,
            },
        });
    });
});

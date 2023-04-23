import GameSavingLoader from "../promise/gamesaver";

describe("GameSavingLoader", () => {
    it("should load a game saving", async () => {
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

import GameSavingLoader from "../gamesaver.js";

// Mock the read and json functions
jest.mock("../reader", () => ({
    default: jest.fn(() =>
        Promise.resolve(
            '{"id":1,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'
        )
    ),
}));

jest.mock("../parser", () => ({
    default: jest.fn(() =>
        Promise.resolve({
            id: 1,
            created: 1546300800,
            userInfo: {
                id: 1,
                name: "Hitman",
                level: 10,
                points: 2000,
            },
        })
    ),
}));

describe("GameSavingLoader", () => {
    it("should load a game saving", async () => {
        const saving = await GameSavingLoader.load();
        expect(saving).toEqual({
            id: 1,
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

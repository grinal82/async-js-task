import read from "./reader.js";
import json from "./parser.js";

export default class GameSavingLoader {
    static async load() {
        try {
            const data = await read();
            const parsedData = await json(data);
            const saving = await JSON.parse(parsedData);
            return new GameSaving(saving);
        } catch (error) {
            console.error(error);
        }
    }
}

class GameSaving {
    constructor(data) {
        this.id = data.id;
        this.created = data.created;
        this.userInfo = {
            id: data.userInfo.id,
            name: data.userInfo.name,
            level: data.userInfo.level,
            points: data.userInfo.points,
        };
    }
}

import read from "./reader.js";
import json from "./parser.js";

export default class GameSavingLoader {
    static load() {
        return read()
            .then((data) => json(data))
            .then((parsedData) => JSON.parse(parsedData))
            .then((saving) => new GameSaving(saving))
            .catch((error) => console.error(error));
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



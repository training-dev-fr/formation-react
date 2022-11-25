import { faCloud, faSun } from '@fortawesome/free-solid-svg-icons'

export class Meteo {
    constructor(json) {
        this.name = json.name;
        if (json.weather[0] !== undefined) {
            this.description = this.translateDescription(json.weather[0].description);
            this.icon = this.getIcon(json.weather[0].main);
        } else {
            this.description = "inconnue";
            this.icon = "unknow"
        }

    }

    translateDescription(description) {
        switch (description) {
            case "Sunny":
                return "ensolleilé"
            case "moderate rain":
                return "Légèrement pluvieux"
            default:
                return "";
        }
    }

    getIcon(weather) {
        if (weather === "Sun") {
            return faSun;
        } else if (weather === "Cloud") {
            return faCloud;
        }
    }
}
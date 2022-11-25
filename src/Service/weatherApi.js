import { Meteo } from "../Model/Meteo";

export function getMeteoApi(city) {
    return fetch("http://weather.training-dev.fr/?city=" + city)
        .then(result => result.json())
        .then(data => {
            if (data.error) {
                return data
            } else {
                return new Meteo(data)
            }
        })
        .catch(error => console.log("Une erreur s'est produite : " + error));
}
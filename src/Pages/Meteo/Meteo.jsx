import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Meteo.css"
import { getMeteoApi } from "../../Service/weatherApi";

export default function Meteo() {
    const [meteo, setMeteo] = useState({});
    const [cityIsValid, setCityIsValid] = useState(false);

    function getMeteo(city) {
        getMeteoApi(city).then(data => {
                if (data.error) {
                    setCityIsValid(false);
                } else {
                    setMeteo(data)
                    setCityIsValid(true);
                }
            })
    }

    return (
        <div>
            <input type="text" id="city" />
            <button id="getMeteo" onClick={() => getMeteo(document.querySelector("#city").value)}>Météo</button>
            {cityIsValid &&
                <div className="weather-card">
                    <div className="city">{meteo.name}</div>
                    <div className="icon"><FontAwesomeIcon icon={meteo.icon} /></div>
                    <div className="description">{meteo.description}</div>
                </div>
            }
            {!cityIsValid && 
                <div>Veuillez choisir une ville existante</div>
            }

        </div>
    );
}
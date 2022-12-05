import './Inscription.css'
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from '../Service/firebase';




export default function Connexion(){

    function signup(){
        createUserWithEmailAndPassword(auth, document.querySelector("#email").value, document.querySelector("#password").value)
        .then((userCredential) => {
          
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return (
        <div className="Form">
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="prenom.nom@mail.fr" required minLength="5" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" id="password" required minLength="8" />
            </div>
            <div className="form-group">
                <button id="signin" onClick={() => signup()}>Inscription</button> 
            </div>
        </div>
    );
}
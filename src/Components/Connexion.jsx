import './Connexion.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Service/firebase';
import { useState } from 'react';


export default function Connexion() {

  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  function signin() {
    setEmailError(null);
    setPasswordError(null);
    signInWithEmailAndPassword(auth, document.querySelector("#email").value, document.querySelector("#password").value)
      .then((userCredential) => {
        localStorage.setItem("user", JSON.stringify(userCredential.user));

      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-not-found":
            setEmailError("Email inconnu");
            break;
          case "auth/wrong-password":
            setPasswordError("Mot de passe incorrect");
            break;
          case "auth/too-many-requests":
            setPasswordError("Compte bloqué temporairement: trop de tentative de connexion échouées, ressayez ultérieurement");
            break;
          default:
            break;
        }
      });
  }
  return (
    <div className="container">
      <div className="form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="prenom.nom@mail.fr" required minLength="5" />
          <span className="error" id="email-error">{emailError}</span>
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" name="password" id="password" required minLength="8" />
          <span className="error" id="password-error">{passwordError}</span>
        </div>
        <div className="form-group">
          <button id="connect" onClick={() => signin()}>Connexion</button>
        </div>
      </div>
    </div>
  );
}


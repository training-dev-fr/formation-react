import './Inscription.css'

export default function Connexion(){
    return (
        <form>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="prenom.nom@mail.fr" required minlength="5" />
            </div>
            <div class="form-group">
                <label for="password">Mot de passe</label>
                <input type="password" name="password" id="password" required minlength="8" />
            </div>
            <div class="form-group">
                <button id="signin">Inscription</button> 
            </div>
        </form>
    );
}
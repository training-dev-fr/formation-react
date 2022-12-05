import { NavLink } from "react-router-dom";
import './Header.css';

export default function Header(){
    return (
        <div className="nav">
            <ul>
                <li>
                    <NavLink to="Home" className="navlink">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/Cart" className="navlink">Panier</NavLink>
                </li>
                <li>
                    <NavLink to="/Login" className="navlink">Connexion</NavLink>
                </li>
                <li>
                    <NavLink to="/Signin" className="navlink">Inscription</NavLink>
                </li>
                <li>
                    <NavLink to="/Meteo" className="navlink">Meteo</NavLink>
                </li>
                <li>
                    <NavLink to="ProductForm" className="navlink">Ajouter un produit</NavLink>
                </li>
            </ul>
        </div>
    );
}
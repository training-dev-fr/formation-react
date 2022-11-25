import "./Product.css";
import Quantite from "./../Quantite/Quantite";
import { useState } from "react";

export default function Product({ product, addBasket, type }) {
    const [value, setValue] = useState(1);
    return (
        <div className={"product " + type}>
            <div className="product-header">
                <h2>{product.name}</h2>
            </div>
            <div className="product-picture">
                <img src={product.picture} alt={product.name} />
            </div>
            <div className="product-description">
                <p>{product.description}</p>
            </div>
            <div className="product-price">
                <span class="price">{product.price}€</span>
                <Quantite price={product.price} value={value} setValue={setValue} />
            </div>
            <button className="addBasket" onClick={() => {
                addBasket({ ...product, quantite: value })
            }}>Ajouter au panier</button>
        </div>
    );
}
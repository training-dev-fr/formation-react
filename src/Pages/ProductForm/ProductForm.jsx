import { useState } from "react";
import { createProduct } from "../../Service/productApi";

export default function ProductForm() {
    const [price,setPrice] = useState(0);

    function handleChange() {
        setPrice(document.querySelector("#price").value);
      }

    function addProduct(){
        let product = {
            name: document.querySelector("#name").value,
            description: document.querySelector("#description").value,
            price: document.querySelector("#price").value,
            picture: document.querySelector("#picture").value
        }
        createProduct(product).then(data => console.log(data));
    }
    return (
        <div id="form">
            <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input type="text" name="name" id="name" placeholder="Pizza" required minLength="3" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" placeholder="Pizza au fromage" required minLength="10"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="price">Prix</label>
                <input type="number" name="price" id="price" value={price} required step="0.01" onChange={() => handleChange()}/>€
            </div>
            <div className="form-group">
                <label htmlFor="picture">Image</label>
                <input type="text" name="picture" id="picture" placeholder="Pizza.png" required minLength="3" />
            </div>
            <div className="form-group">
                <button id="signin" onClick={() => addProduct()}>Ajouter un produit</button>
            </div>
        </div>
    );
}
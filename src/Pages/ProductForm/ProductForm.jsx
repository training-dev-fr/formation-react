import { createProduct } from "../../Service/productApi";

export default function ProductForm() {
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
            <div class="form-group">
                <label for="name">Nom</label>
                <input type="text" name="name" id="name" placeholder="Pizza" required minlength="3" />
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea name="description" id="description" placeholder="Pizza au fromage" required minlength="10"></textarea>
            </div>
            <div class="form-group">
                <label for="price">Prix</label>
                <input type="number" name="price" id="price" value="0.00" required step="0.01" />€
            </div>
            <div class="form-group">
                <label for="picture">Image</label>
                <input type="text" name="picture" id="picture" placeholder="Pizza.png" required minlength="3" />
            </div>
            <div class="form-group">
                <button id="signin" onClick={addProduct()}>Inscription</button>
            </div>
        </div>
    );
}
import Product from "../../Components/Product/Product";
import "./Panier.css";

export default function Panier({panier,addBasket}){
    return(
        
        <div className="panier">
            {
                panier.map(product => <Product product={product} addBasket={addBasket} type="basket" ></Product>)
            }
        </div>
    );
}
import Product from "./../../Components/Product/Product";
import data from "./../../data/data";
import "./Home.css";

export default function Home({addBasket}){
    return(
        <div className="productList">
            {
                data.map(element => <Product product={element} addBasket={addBasket} type="card" />)
            }
        </div>
    );
}
import { useEffect, useState } from "react";
import Product from "./../../Components/Product/Product";
import "./Home.css";
import { getAllProduct } from "../../Service/productApi";

export default function Home({addBasket}){
    const [productList, setProductList] = useState([]);
    const [productIsValid, setProductIsValid] = useState(false);
    useEffect(() => {
        getAllProduct().then(data => {
            if (data.error) {
                setProductIsValid(false);
            } else {
                setProductList(data)
                setProductIsValid(true);
            }
        })
    },[setProductList])
    
    return(
        <div>
            {productIsValid &&
            <div className="productList">
                {
                    productList.map(element => <Product key={`product-${element.id}`} product={element} addBasket={addBasket} type="card" />)
                }
            </div>
            }
        </div>
    );
}
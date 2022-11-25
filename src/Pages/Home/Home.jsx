import { useEffect, useState } from "react";
import Product from "./../../Components/Product/Product";
import { getAllProduct } from "../../Service/productApi";
//import data from "./../../data/data";
import "./Home.css";

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
    })
    return(
        <div>
            {productIsValid &&
            <div className="productList">
                {
                    productList.map(element => <Product product={element} addBasket={addBasket} type="card" />)
                }
            </div>
            }
        </div>
    );
}
import { useState } from "react";
import "./Quantite.css";

export default function Quantite({price,value,setValue}){
    
    const [total, setTotal] = useState(price);
    return(
        <div className="quantite">
            <input type="text" value={value} readOnly />
            <button onClick={() => { 
                setValue(value+1);
                setTotal(price*(value+1));
            }}>+</button>
            <button onClick={() => { 
                if(value>1){
                    setValue(value-1);
                    setTotal(price*(value-1));
                }
            }}>-</button>
            {total}€
        </div>
    );
}
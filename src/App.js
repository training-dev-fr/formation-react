import './App.css';
import Connexion from './Components/Connexion'
import Inscription from './Components/Inscription'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import {useState, useEffect} from "react";
import Panier from './Pages/Panier/Panier';
import Error from './Pages/Error/Error';
import Meteo from './Pages/Meteo/Meteo';
import ProductForm from './Pages/ProductForm/ProductForm';
//import Panier from './Service/Panier'


function App() {
  const [panier, setPanier] = useState([]);

  function addBasket(product){
    let productFound = panier.find(element => element.id === product.id);
    if(productFound === undefined){
      panier.push(product);
      setPanier(panier);
    }else{
      productFound.quantite += product.quantite;
      setPanier(panier);
    }
  }

  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home addBasket={addBasket}/>} />
          <Route path="/Cart" element={<Panier panier={panier} addBasket={addBasket} />} />
          <Route path="/Login" element={<Connexion />} />
          <Route path="/Signin" element={<Inscription />} />
          <Route path="/Meteo" element={<Meteo/>} />
          <Route path="/ProductForm" element={<ProductForm/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

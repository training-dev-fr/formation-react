import { Product } from "../Model/Product";
import { firebase } from './firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';

const productCollection = collection(firebase, 'product');

const getAllProduct = async() => {
    const product = await getDocs(productCollection);
    return product.docs.map(doc => new Product({ id: doc.id, ...doc.data() }));
}

const createProduct = async(product) => {
    await addDoc(productCollection, product);
}

export { getAllProduct, createProduct };












/*export function getAllProduct() {
    return fetch("https://data.mongodb-api.com/app/data-jsfkh/endpoint/data/v1/action/find", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-key": "Ng7VuCVwMBiNwLtZ6SN4zYedS1ScygnLQRnmuxpl2YkuKtqRqQy6iR4H17gknBVN",
                "sec-fetch-mode": "cors"
            },
            body: JSON.stringify({
                "dataSource": "Cluster0",
                "database": "e-commerce",
                "collection": "product"
            })
        })
        .then(result => result.json())
        .then(data => {
            if (data.error) {
                return data
            } else {
                return new Product(data)
            }
        })
        .catch(error => console.log("Une erreur s'est produite : " + error));
}

export function createProduct(product) {
    return fetch("https://data.mongodb-api.com/app/data-jsfkh/endpoint/data/v1/action/insertOne", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-key": "Ng7VuCVwMBiNwLtZ6SN4zYedS1ScygnLQRnmuxpl2YkuKtqRqQy6iR4H17gknBVN"
            },
            body: JSON.stringify({
                "dataSource": "Cluster0",
                "database": "e-commerce",
                "collection": "product",
                "document": product
            })
        })
        .then(result => result.json())
        .then(data => {
            return data
        })
        .catch(error => console.log("Une erreur s'est produite : " + error));
}*/
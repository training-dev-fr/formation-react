export class Product {
    constructor(json) {
        this.name = json.name;
        this.price = json.price;
        this.description = json.description;
        this.id = json.id;
        this.picture = "/picture/" + json.picture;

    }
}
export class Api {
    constructor() {
        this.url = process.env.VUE_APP_URL;
    }

    getProductList() {
        return fetch(this.url, {
            method: "GET",
            headers: new Headers(),
            mode: "cors",
            cache: "default"
        }).then(res => {
            return res.json();
        }).then(json => {
            return json.products;
        })
    }
}

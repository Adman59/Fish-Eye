class mediaFactory {
    constructor(data) {
        const { id, photographerId, title, image, likes, date, price } = data;
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.image = image;
        this.likes = likes;
        this.date = date;
        this.price = price;
    }

    get displayHeaderPhotographer() {

        //Elements du DOM
        let articlephotograper =
            `
            <article class="card-photographer">
                <div>TEST TEST TEST TEST TEST</div>
            </article>
            `
            ;

        return (articlephotograper);


    }
}

function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;
    const picture = `assets/photographers/${portrait}`;

    function displayCardPhotographer() {

        //Elements du DOM
        let articlephotograper =
            `
            <article class="card-photographer">
                <a class="card-photographer-link" href="./photographer.html?id=${id}" aria-label="Lien vers la page de ${name}">
                    <img src="${picture}" alt="Photographe ${name}">
                    <h2>${name}</h2>
                </a>
                <div class="photographer-desc">
                    <h3>${city}, ${country}</h3>
                    <p class="photogapher-tagline">${tagline}</p>
                    <p class="photographer-price">${price}€/jour</p>
                </div>
            </article>
            `
            ;

        return (articlephotograper);
    }

    return { name, picture, displayCardPhotographer }
}




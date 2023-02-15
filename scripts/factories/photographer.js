function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;
    const picture = `assets/photographers/${portrait}`;

    function displayCardPhotographer() {

        //Elements du DOM
        const article = document.createElement('article');
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const link = document.createElement('a');
        const description = document.createElement('div');
        const h3 = document.createElement('h3');
        const signature = document.createElement('p');
        const tarifs = document.createElement('p')

        //Attribution de la data
        article.classList.add("card-photographer");
        link.href = './photographer.html?id=' + id;
        link.classList.add('card-photographer-link');
        link.setAttribute("aria-label", "Lien vers la page de " + name);
        img.setAttribute("src", picture);
        img.setAttribute("alt", "Photographe " + name);
        h2.textContent = name;
        description.classList.add('photographer-desc');
        h3.textContent = city + ', ' + country;
        signature.textContent = tagline;
        signature.classList.add('photogapher-tagline');
        tarifs.textContent = price + "€/jour";
        tarifs.classList.add('photographer-price');

        //Création du HTML de la card photographer
        article.appendChild(link);
        article.appendChild(description);
        link.appendChild(img);
        link.appendChild(h2);
        description.appendChild(h3);
        description.appendChild(signature);
        description.appendChild(tarifs);

        return (article);
    }

    return { name, picture, displayCardPhotographer }
}




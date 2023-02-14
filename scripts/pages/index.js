
// La fonction getPhotographers permet de récupérer les données des photographes (le async await permet d'attendre que les données soient récupérées pour s'afficher) :

async function getPhotographers() {

    await fetch("../data/photographers.json")
        .then((res) => res.json())
        .then((data) => (photographers = data.photographers));
    // et bien retourner le tableau photographers seulement une fois récupéré
    return {
        photographers: [...photographers]
    };
}

// La fonction displayData permet d'afficher le contenu de chaque photographe dans le HTML a l'intérieur de la balise photographer section

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const cardPhotographer = photographerModel.displayCardPhotographer();
        photographersSection.appendChild(cardPhotographer);
    });
};



async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();


////////////////////////////////////////////////////

// class photographe // objet 1 video && objet 2 image

fetch("../data/photographers.json")
    .then((res) => res.json())
    .then((data) => console.log(data.photographers[0].portrait));

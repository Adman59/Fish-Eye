//Mettre le code JavaScript lié à la page photographer.html

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



// La fonction displayData permet d'afficher...

// affichage de la section photographer_header
async function displayData(photographer) {
    // Photographer's detail
    photographers.forEach((photographer) => {
        const photographersHeader = document.querySelector(".photograph-header");
        const photographerDetails = photographerDetailFactory(photographer);
        const userCardDOM = photographerDetails.displayHeaderPhotographer();

        photographersHeader.insertAdjacentHTML('beforeend', userCardDOM);
    })
};




async function init() {
    // Récupère les datas des photographes
    photographer = await getPhotographers();

    displayData(photographer);

};

init();

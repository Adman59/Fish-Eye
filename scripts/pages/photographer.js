//Mettre le code JavaScript lié à la page photographer.html

// La fonction getPhotographers permet de récupérer les données des photographes (le async await permet d'attendre que les données soient récupérées pour s'afficher) :

let params = (new URL(document.location)).searchParams;
let photographer_id = params.get('id');
let photographer;
let media;

console.log(params);
console.log(photographer_id);

//--------------------------------------------------------//

function getPhotographer() {
    // Recuperation du fichier JSON en utilisant "fetch".
    return fetch('../data/photographers.json')
        .then((res) => res.json())
        .then((data) => (photographers = data.photographers))
        .then(function (photographers) {
            let result = null;
            photographers.forEach(element => {
                if (element.id == photographer_id) {
                    result = element;
                }
            });

            return result;
        })
        .catch(function (err) {
            // Une erreur est survenue
            console.log(err)
        });
}

//--------------------------------------------------------//

function getMedias() {
    const sectionMedia = document.querySelector('.medias-section');

    // Recuperation du fichier JSON en utilisant "fetch".
    return fetch('../data/photographers.json')
        .then((res) => res.json())
        .then((data) => {
            const filteredMedias = data.media.filter((media) => media.photographerId == photographer_id);
            console.log(filteredMedias);
            return filteredMedias;
        })
        .catch(function (err) {
            // Une erreur est survenue
            console.log(err)
        });
}



//--------------------------------------------------------//

// La fonction displayData permet d'afficher...
// affichage de la section photographer_header
async function displayData(photographer) {
    // Photographer's detail
    const photographersHeader = document.querySelector(".photograph-header");
    const photographerDetails = photographerDetailFactory(photographer);
    const userCardDOM = photographerDetails.displayHeaderPhotographer();

    photographersHeader.insertAdjacentHTML('beforeend', userCardDOM);
};

//--------------------------------------------------------//

async function displayPrice(photographer) {
    const encartPhotographer = document.getElementById("encart-tarif");
    const encartPhotographerContent = photographerDetailFactory(photographer);
    const userPrice = encartPhotographerContent.displayPricePhotographer();

    encartPhotographer.insertAdjacentHTML('beforeend', userPrice);
};


//--------------------------------------------------------//

async function displayMedia(mediaArray) {
    const gallery = document.querySelector('.medias-section');

    try {
        mediaArray.forEach((media) => {
            const factory = new MediaFactory(media);
            const mediaHtml = factory.createHtml();
            gallery.innerHTML += mediaHtml;
        });
    } catch (error) {
        console.log(error);
    }

    // Affichage de la Lightbox

    const lightbox = document.querySelector('.lightbox');
    const image = lightbox.querySelector('.lightbox-frame img');
    console.log(image);

    const links = document.querySelectorAll(".media-photographer .media");

    console.log(links);


    // On ajoute l'écouteur click sur les liens
    for (let link of links) {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            // On ajoute l'image du lien cliqué dans la lightbox
            image.src = e.currentTarget.href;

            // On affiche la lightbox
            displayLightbox();
        })
    }
}


//--------------------------------------------------------//





//--------------------------------------------------------//

async function init() {
    // Récupère les datas des photographes
    photographer = await getPhotographer();
    media = await getMedias();

    displayData(photographer);
    displayPrice(photographer);
    displayMedia(media);

};

//--------------------------------------------------------//

init();
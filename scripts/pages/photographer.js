//Mettre le code JavaScript lié à la page photographer.html

// La fonction getPhotographers permet de récupérer les données des photographes (le async await permet d'attendre que les données soient récupérées pour s'afficher) :

let params = (new URL(document.location)).searchParams;
let photographer_id = params.get('id');
let photographer;

console.log(params);
console.log(photographer_id);

//--------------------------------------------------------//

async function getPhotographer() {
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

async function init() {
    // Récupère les datas des photographes
    photographer = await getPhotographer();

    displayData(photographer);

};

//--------------------------------------------------------//

init();
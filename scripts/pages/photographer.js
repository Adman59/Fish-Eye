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

    // Ajout de la modal contact correspondante
    const modalContact = document.querySelector(".modal");
    const userModalDOM = photographerDetails.displayModalPhotographer();
    modalContact.insertAdjacentHTML('beforeend', userModalDOM);

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
    const mediaLightboxFrame = document.querySelector(".lightbox-frame");
    console.log(mediaLightboxFrame);

    try {
        mediaArray.forEach((media) => {
            const factory = new MediaFactory(media);
            const mediaHtml = factory.createHtml();
            gallery.innerHTML += mediaHtml;
            // mediaLightboxFrame.innerHTML += factory.createMediaLightbox();
            const mediaLightboxHtml = factory.createMediaLightbox();
            mediaLightboxFrame.innerHTML += mediaLightboxHtml;

        });
    } catch (error) {
        console.log(error);
    }
}

//--------------------------------------------------------//

// Lightbox

const addEventLightbox = async () => {
    const lightboxCloseBtn = document.getElementById("lightbox-close-btn");
    const mediaGallery = document.querySelectorAll(".media");
    const mediaLightbox = document.querySelectorAll(".media-lightbox");
    const lightbox = document.querySelector(".lightbox");
    const previous = document.getElementById("previous");
    const next = document.getElementById("next");
    let index = 0;


    function displayLightbox() {
        lightbox.style.display = "block";
        lightbox.setAttribute("aria-hidden", "false");
    }

    function closeLightbox() {
        lightbox.style.display = "none";
        lightbox.setAttribute("aria-hidden", "true");
        mediaLightbox[index].classList.toggle("hide");
    }

    function goToNext() {
        mediaLightbox[index].classList.toggle("hide");

        if (index == mediaLightbox.length - 1) {
            mediaLightbox[0].classList.toggle("hide");
            index = 0;
        } else {
            mediaLightbox[index + 1].classList.toggle("hide");
            index++;
        }
    }
    function goToPrevious() {
        mediaLightbox[index].classList.toggle("hide");
        console.log(index);

        if (index <= 0) {
            console.log("ok");
            index = mediaLightbox.length - 1;
            mediaLightbox[index].classList.toggle("hide");
        } else {
            mediaLightbox[index - 1].classList.toggle("hide");
            index--;
        }
    }

    //keyboard events

    document.addEventListener("keyup", function (e) {
        if (e.key === "ArrowRight") {
            goToNext();
        } else if (e.key === "ArrowLeft") {
            goToPrevious();
        } else if (e.key === "Escape") {
            closeLightbox();
        } else if (e.key === "Enter") {
            e.preventDefault();
            startLightbox(e);
            // pourquoi ça ne fonctionne pas ?
        }
    });


    function startLightbox(e) {
        displayLightbox();
        const clickedMedia = e.target.attributes.src.nodeValue;
        console.log(clickedMedia);

        for (let i = 0; i < mediaLightbox.length; i++) {
            const mediaSrc = mediaLightbox[i].childNodes[1].attributes.src.nodeValue;

            if (clickedMedia === mediaSrc) {
                mediaLightbox[i].classList.toggle("hide");
                index = i;
            }
        }
    }

    // J'ai un problème quand je veux naviguer au clavier dans les médias et que je tape sur entrée pour afficher la modal //


    mediaGallery.forEach((media) => {
        media.addEventListener("click", (e) => {
            e.preventDefault();
            startLightbox(e);
            // media.addEventListener();
        })
    });

    //close lightbox//
    lightboxCloseBtn.addEventListener("click", closeLightbox);

    next.addEventListener("click", goToNext);

    previous.addEventListener("click", goToPrevious);

}

//--------------------------------------------------------//


function getMedias() {

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

// Likes

const addLikes = async () => {
    const likesBtn = document.querySelectorAll(".like-icon");
    console.log(likesBtn);
    let numbersLikes = document.querySelectorAll(".like-numbers");
    let totalLikes = document.querySelector(".total-like-numbers");

    const filteredMedias = await getMedias();

    //Ajouter un like sur un media
    likesBtn.forEach((button, index) => {
        button.addEventListener("click", function () {
            let clickedBtn = button.getAttribute("data-like");

            // Si data-like = false donc n'a pas été cliqué alors +1
            if (clickedBtn == "false") {
                filteredMedias[index].likes += 1;
                numbersLikes[index].innerHTML = filteredMedias[index].likes;
                button.setAttribute("data-like", "true");
                totalLikes.innerHTML = parseInt(totalLikes.innerHTML) + 1;
            } else { // Si data-like = true donc a déjà été cliqué alors -1
                filteredMedias[index].likes -= 1;
                numbersLikes[index].innerHTML = filteredMedias[index].likes;
                button.setAttribute("data-like", "false");
                totalLikes.innerHTML = parseInt(totalLikes.innerHTML) - 1;
            }
        })
    })

    //Nombres de likes total du photographe
    let num = 0;

    for (i = 0; i < numbersLikes.length; i++) {
        num += parseInt(numbersLikes[i].innerText);
    }
    totalLikes.innerHTML = num;
};

//--------------------------------------------------------//

// Likes

const sortMedias = async () => {
    const select = document.querySelector('.filter-select'); // changer la classe en filter-select
    const gallery = document.querySelector('.medias-section');

    let medias = await getMedias();

    select.addEventListener('change', (e) => { // changer l'événement en change
        switch (select.value) { // utiliser select.value plutôt que e.target.innerText
            case 'popularité': // changer le value de l'option
                medias.sort((a, b) => b.likes - a.likes);
                break;
            case 'date':
                medias.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'titre':
                medias.sort((a, b) => a.title.localeCompare(b.title));
                break;
            default:
                break;
        }

        gallery.innerHTML = '';
        displayMedia(medias);
    });
};


//--------------------------------------------------------//

async function init() {
    // Récupère les datas des photographes
    photographer = await getPhotographer();
    media = await getMedias();

    displayData(photographer);
    displayPrice(photographer);
    displayMedia(media);
    addEventLightbox();
    addLikes();
    sortMedias();
};

//--------------------------------------------------------//

init();
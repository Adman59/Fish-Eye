const main = document.querySelector('main');
const contactModal = document.getElementById('contact_modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const bodyPhotographer = document.getElementById('body-photographer');
const sendButton = document.querySelector(".contact_button");


function displayModal() {
    contactModal.style.display = "block";
    main.setAttribute('aria-hidden', 'true');
    bodyPhotographer.setAttribute('aria-hidden', 'true');
    contactModal.setAttribute('aria-hidden', 'false'); // lorsque j'ouvre la modal je ne la cache plus aux technologies d'assistance.
    // modalCloseBtn.focus();
}

function closeModal() {
    contactModal.style.display = "none";
    main.setAttribute('aria-hidden', 'false');
    bodyPhotographer.setAttribute('aria-hidden', 'false');
    contactModal.setAttribute('aria-hidden', 'true'); // lorsque je ferme la modal je la cache plus aux technologies d'assistance.
}

// Close modal when escape key is pressed

document.addEventListener('keydown', function (e) {
    const keyCode = e.keyCode ? e.keyCode : e.which;
    if (contactModal.getAttribute('aria-hidden') === 'false' && keyCode === 27) {
        closeModal();
    }
});

// Récupération des valeurs pour les afficher en console.log

const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const message = document.getElementById("message");


sendButton.addEventListener("click", (e) => {
    e.preventDefault(); // empêche le formulaire d'être soumis

    console.log(firstName.value);
    console.log(lastName.value);
    console.log(email.value);
    console.log(message.value);
})


// Lightbox

const lightbox = document.querySelector(".lightbox")

function displayLightbox() {
    lightbox.style.display = "block";
}

function closeLightbox() {
    lightbox.style.display = "none";
}
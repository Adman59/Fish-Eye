
function photographerDetailFactory(data) {
  const { name, portrait, city, country, tagline, price, id, likes } = data;
  const picture = `../assets/photographers/${portrait}`;


  function displayHeaderPhotographer() {

    let headerphotographer =
      `
        <div class="profil-photographer">
          <h1 class="profil-photographer-h1">${name}</h1>
          <p class="photogapher-location">${city}, ${country}</p>
          <p class="photogapher-tagline">${tagline}</p>
        </div>

        <div class="photographer-contact">
            <button type="button" class="contact_button" id="contact-btn" onclick="displayModal()" aria-label="Contact Me">Contactez-moi</button>
        </div>

        <div class="photographer-img">
          <img src="${picture}" alt="${name}">
        </div>  
        `;
    return headerphotographer;
  }

  function displayPricePhotographer() {
    let encarttarif =
      `
      <div class="total-like-media">
        <span class="total-like-numbers"></span>
        <span class="like-icon" data-like="false" >
          <i class="fas fa-heart" aria-label="likes">
          </i>
        </span> 
      </div>
        <p class="photographer-price">${price}€ / jour</p>
      `;
    return encarttarif;
  }

  function displayModalPhotographer() {
    let modalPhotographer =
      `
        <header>
            <h2>Contactez-moi <span id="namePhotographer">${name}</span></h2>
            <button id="modal-close-btn" onclick="closeModal()" aria-label="Close contact form">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z"
                fill="white" />
            </svg>
            </button>
        </header>

        `
      ;
    return (modalPhotographer);
  }

  return { name, portrait, city, country, tagline, price, id, picture, likes, displayHeaderPhotographer, displayPricePhotographer, displayModalPhotographer };
}


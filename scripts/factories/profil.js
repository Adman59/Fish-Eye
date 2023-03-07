
function photographerDetailFactory(data) {
  const { name, portrait, city, country, tagline, price, id, likes } = data;
  const picture = `../assets/photographers/${portrait}`;


  function displayHeaderPhotographer() {

    let headerphotographer =
      `
        <div class="profil-photographer">
          <h1>${name}</h1>
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

  return { name, portrait, city, country, tagline, price, id, picture, likes, displayHeaderPhotographer, displayPricePhotographer };
}


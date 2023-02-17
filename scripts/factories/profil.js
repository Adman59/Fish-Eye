
function photographerDetailFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;
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
            <button type="button" class="contact_button" id="contact-btn" aria-label="Contact Me">Contactez-moi</button>
        </div>

        <div class="photographer-img">
          <img src="${picture}" alt="${name}">
        </div>  
        `;
    return headerphotographer;
  }

  return { name, portrait, city, country, tagline, price, id, picture, displayHeaderPhotographer };
}



function photographerDetailFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;
  const picture = `../assets/photographers/${portrait}`;

  function displayHeaderPhotographer() {
    let headerphotographer =
      `
      <div class="photographer-desc">
        <h3>${city}, ${country}</h3>
        <p class="photogapher-tagline">${tagline}</p>
      </div>
        `;
    return headerphotographer;
  }

  return { name, portrait, city, country, tagline, price, id, picture, displayHeaderPhotographer };
}

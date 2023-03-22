document.addEventListener('DOMContentLoaded', () => {
  /**
 * Création d'une fonction principale "main" qui va appeler les autres fonctions.
 * @async
 * @function [<main>]
 */

  async function main() {
    const { photographers } = await getPhotographers(); // on attend de recevoir les données des photographes
    displayData(photographers); // Appel de la fonction displayData avec en paramètre les données reçus.
  }

  main();

  /**
 * Création d'une fonction permettant de récupérer les informations des photographes du fichier JSON.
 * @function [<getPhotographers>]
 * @returns {Promise} - Promise qui va contenir les informations relatives aux photographes se trouvant dans le fichier JSON.
 */

  function getPhotographers() {
    return fetch('http://127.0.0.1:5501/data/photographers.json')
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });
  }

  /**
 * Création d'une fonction pour afficher dans le HTML les données provenant du fichier json
 * @function [<displayData>]
 * @param {Array} photographers - Tableau des photographes contenant toutes les données.
 */

  function displayData(photographers) {
    const photographersSection = document.querySelector('.photographer_section');

    photographers.forEach((photographer) => {
      const photographerModel = photographerFactory(photographer); // Appel de la fonction photographerFactory avec en paramètre les informations des photographes.
      const userCardDOM = photographerModel.getUserCardDOM(); // Appel de la fonction getUser qui va générer les différents photographes
      photographersSection.appendChild(userCardDOM);
    });
  }
});

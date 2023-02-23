class MediaFactory {
    constructor(data) {
        if (data.image) {
            return new Img(data);
        } else if (data.video) {
            return new Video(data);
        } else {
            throw "Format d'image inconnu";
        }
    }
}
class Img {
    constructor(data) {
        this.image = data.image;
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.likes = data.likes;
        this.tags = data.tags;
        this.date = data.date;
        this.alt = data.alt;
    }
    createHtml() {
        return `
        <article class="media-photographer">
          <div class="media">
            <img src="./assets/images/${this.photographerId}/${this.image}" alt="${this.alt}" class="media-thumbnail" tabindex="5"/>
          </div>
         <div class="media-description">
              <h3>${this.title}</h3>
            <div class="like">
                <span class="numbers">${this.likes}</span>
                <span class="hearts" data-like="false" tabindex="5">
                  <i class="fas fa-heart" alt="coeur" aria-label="ajoute ou supprime le like au clic">
                  </i>
                </span> 
            </div>
          </div>
        </article>
          `;
    }
}

class Video {
    constructor(data) {
        this.video = data.video;
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.likes = data.likes;
        this.tags = data.tags;
        this.date = data.date;
        this.alt = data.alt;
    }
    createHtml() {
        return `
        <article class="media-photographer">
            <div class="media">
                    <video src="./assets/images/${this.photographerId}/${this.video}" controls type="video/mp4" alt="${this.alt}" class="media-thumbnail" tabindex="5"> </video>
            </div>
            <div class="media-description">
                <h3>${this.title}</h3>
                <div class="like">
                    <span class="numbers">${this.likes}</span>
                    <span class="hearts" data-like="false" tabindex="5">
                    <i class="fas fa-heart" alt="coeur" aria-label="ajoute ou supprime le like au clic">
                    </i>
                    </span>
                </div>
            </div>
        </article>
        `;
    }
}

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
          <a href="./assets/images/${this.photographerId}/${this.image}" alt="${this.alt}" class="media">
            <img src="./assets/images/${this.photographerId}/${this.image}" alt="${this.title}" class="media-thumbnail" />
          </a>
         <div class="media-description">
              <h3>${this.title}</h3>
            <div class="like-media">
                <span class="like-numbers">${this.likes}</span>
                <span class="like-icon" data-like="false" >
                  <i class="fas fa-heart" aria-label="likes">
                  </i>
                </span> 
            </div>
          </div>
        </article>
          `;
    }

    createMediaLightbox() {
        return `
        <div class="media-lightbox hide">
          <img src="./assets/images/${this.photographerId}/${this.image}" alt="${this.title}"/>
          <p class="title-media">${this.title}</p>
        </div>
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
            <a href="./assets/images/${this.photographerId}/${this.video}" controls auto type="video/mp4" alt="${this.alt}" class="media">
                <video src="./assets/images/${this.photographerId}/${this.video}" controls auto type="video/mp4" alt="${this.alt}" class="media-thumbnail" ></video>
            </a>
            <div class="media-description">
                <h3>${this.title}</h3> 
                <div class="like-media">
                    <span class="like-numbers">${this.likes}</span>
                    <span class="like-icon" data-like="false" >
                    <i class="fas fa-heart" aria-label="likes">
                    </i>
                    </span>
                </div>
            </div>
        </article>
        `;
    }

    createMediaLightbox() {
        return `
        <div class="media-lightbox hide">
            <video src="./assets/images/${this.photographerId}/${this.video}" controls type="video/mp4"> alt="${this.title}" </video>
            <p class="title-media">${this.title}</p>
        </div>
        `;
    }
}
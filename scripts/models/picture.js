class Picture {
    constructor(data) {
        this._id = data.id
        this._photographerId = data.photographerId
        this._title = data.title
        this._image = data.image
        this._likes = data.likes
        this._date = data.date
        this._price = data.price
    }

    get id() {
        return this._id
    }

    get photographerId() {
        return this._photographerId
    }

    get title() {
        return this._title
    }

    get media() {
        return `<div>
                    <img src="public/img/${this._photographerId}/${this._image}" alt="Photographie - ${this._title}">
                </div>`
    }

    get likes() {
        return this._likes
    }

    get date() {
        return this._video
    }

    get price() {
        this._price
    }
}
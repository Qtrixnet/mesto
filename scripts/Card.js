// import * as constants from "./constants.js";
import { openPicturePopup, popupPicture, popupDescription } from "./constants.js";
import { openPopup } from "./index.js";

export class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content.querySelector(".elements__list-item")
            .cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        // константы с изображением и текстом карточки
        const elementPictureLink = this._element.querySelector(".elements__picture");
        const elementText = this._element.querySelector(".elements__text");

        elementPictureLink.style.backgroundImage = "url(" + `${this._link}` + ")";
        elementText.textContent = this._name;

        this._setEventListeners();

        return this._element;
    }

    _setEventListeners() {
        this._element
            .querySelector(".elements__like-button")
            .addEventListener("click", () => {
                this._likeButtonClick();
            });
        this._element
            .querySelector(".elements__delete-button")
            .addEventListener("click", () => {
                this._deleteButtonClick();
            });
        this._element
            .querySelector(".elements__picture")
            .addEventListener("click", () => {
                this._pictureClick();
            });
    }

    _likeButtonClick() {
        this._element
            .querySelector(".elements__like-button")
            .classList.toggle("elements__like-button_active");
        this._element
            .querySelector(".elements__like-button")
            .classList.toggle("heartbeat");
    }

    _deleteButtonClick() {
        this._element.remove();
    }

    _pictureClick() {
        openPopup(openPicturePopup);
        popupPicture.src = this._link;
        popupDescription.textContent = this._name;
    }
}
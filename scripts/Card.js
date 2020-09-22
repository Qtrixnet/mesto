import { initialCards } from "./initialCards.js";
import * as constants from "./constants.js";
import { openPopup } from "./index.js";

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const CardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__list-item")
      .cloneNode(true);

    return CardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".elements__picture").src = this._link;
    this._element.querySelector(".elements__picture").alt = this._name;
    this._element.querySelector(".elements__text").textContent = this._name;

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
    openPopup(constants.openPicturePopup);
    constants.popupPicture.src = this._link;
    constants.popupDescription.textContent = this._name;
  }
}

initialCards.forEach((item) => {
  const card = new Card(item, ".cardTemplate");
  const cardElement = card.generateCard();

  constants.cardsContainer.append(cardElement);
});

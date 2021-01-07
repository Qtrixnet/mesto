//* Класс карточки
export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._data = data;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(".elements__like-button");
    this._deleteButton = this._element.querySelector(
      ".elements__delete-button"
    );
    this.__likeCounter = this._element.querySelector(".elements__like-counter");
  }

  //! OK
  //* Получение шаблона разметки
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__list-item")
      .cloneNode(true);
    return cardElement;
  }

  _like() {
    if (this._data.likes.length === 0) {
      return ':('
    } else {
      return this._data.likes.length
    }
  }

  //* Создание карточки
  createCardElement() {
    this._setEventListeners();
    const cardImage = this._element.querySelector(".elements__picture");
    cardImage.alt = `${this._data.name}`;
    cardImage.src = this._data.link;
    this._element.querySelector(
      ".elements__text"
    ).textContent = this._data.name;
    this._element.querySelector(".elements__like-counter").textContent = this._like();
    return this._element;
  }

  //* Установка слушателей
  _setEventListeners() {
    this._deleteButton.addEventListener("click", () => this._deleteCard());

    this._likeButton.addEventListener("click", () => this._likeToggler());

    this._element
      .querySelector(".elements__picture")
      .addEventListener("click", this._handleCardClick);
  }

  //* Переключение состояния лайка
  _likeToggler() {
    this._likeButton.classList.toggle("heartbeat");
    this._likeButton.classList.toggle("elements__like-button_active");



    if(this._likeButton.classList.contains("elements__like-button_active")) {
      this._data.likes.length++
      this.__likeCounter.textContent = this._like()
    } else {
      this._data.likes.length--
      this.__likeCounter.textContent = this._like()
    }
  }

  //* Удаление карточки
  _deleteCard() {
    this._element.remove();
    this._element = null;
  }
}

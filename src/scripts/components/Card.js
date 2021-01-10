//* Класс карточки
export class Card {
  constructor(
    data,
    cardTemplate,
    userId,
    imagePopup,
    handleDeleteCard
    // handleDeleteCard,
    // handleLikeCard,
    // handleUnlikeCard
  ) {
    this._data = data; //* полные данные о карточке
    this._cardTemplate = cardTemplate; //* класс шаблона разметки
    this._userId = userId; //* id моего профиля
    this._cardOwnerId = data.owner._id; //* id владельца карточки
    this._cardId = data._id;
    this._imagePopup = imagePopup; //* функция открытия попапа с фото
    this._element = this._getTemplate(); //* разметка карточки
    this._likeButton = this._element.querySelector(".elements__like-button");
    this._deleteButton = this._element.querySelector(
      ".elements__delete-button"
    );
    this._likeCounter = this._element.querySelector(".elements__like-counter");
    this._handleDeleteCard = handleDeleteCard;
    // this._handleLikeCard = handleLikeCard;
    // this._handleUnlikeCard = handleUnlikeCard;
    // console.log(data._id);
  }

  //* Получение шаблона разметки
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplate)
      .content.querySelector(".elements__list-item")
      .cloneNode(true);
    return cardElement;
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
    this._element.querySelector(
      ".elements__like-counter"
    ).textContent = this._data.likes.length;
    this._cardOwnerCheck();
    return this._element;
  }

  //* Установка слушателей
  _setEventListeners() {
    this._deleteButton.addEventListener("click", () => this._deleteCard());

    this._likeButton.addEventListener("click", () => this._likeToggler());

    this._element
      .querySelector(".elements__picture")
      .addEventListener("click", this._imagePopup);
  }

  //* Переключение состояния лайка
  _likeToggler() {
    this._likeButton.classList.toggle("heartbeat");
    this._likeButton.classList.toggle("elements__like-button_active");

    if (this._likeButton.classList.contains("elements__like-button_active")) {
      this._data.likes.length++;
      this._likeCounter.textContent = this._data.likes.length;
      // this._handleLikeCardClick(this._cardOwnerId);
    } else {
      this._data.likes.length--;
      this._likeCounter.textContent = this._data.likes.length;
      // this._handleDeleteLikeCardClick(this._cardOwnerId);
    }
  }

  _handleTrashCardClick() {
    const data = {
      card: this._element,
      cardId: this._cardId
    }
    this._handleDeleteCard(data)
  }

  _cardOwnerCheck() {
    if (this._cardOwnerId === this._userId) {
      this._deleteButton.classList.add("elements__delete-button_active");
      this._deleteButton.addEventListener("click", () => this._handleTrashCardClick());
    }
  }

  //* Удаление карточки
  _deleteCard() {
    // this._element.remove();
    // this._element = null;
    this._handleDeleteCard()
  }
}

// Импорты
import { Card } from "./Card.js";
import * as constants from "./constants.js";
import { initialCards } from "./initialCards.js";
import { FormValidator, enableValidation } from "./FormValidator.js"

// Открытие попапа
export function openPopup(popup) {
  popup.classList.add("popup_opened");

  // Активный попап
  const activePopup = document.querySelector(".popup_opened");

  // Сабмит в активном попапе
  const PopupButton = activePopup.querySelector(".popup__button");

  // Дизейбл кнопки происходит в классе с валидацией, но при открытии попапа также вешается дизейбл если в нем есть кнопка
  if (activePopup.contains(PopupButton)) {
    PopupButton.setAttribute("disabled", true);
    PopupButton.classList.add("popup__button_disabled");
  }

  closeOnEsc(popup);
}

// Закрытие попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  window.onkeyup = null;
}

// Сброс полей формы профиля
function resetEditPopupFields() {
  constants.nameInput.classList.remove("popup__input_type_error");
  constants.jobInput.classList.remove("popup__input_type_error");
  constants.nameInputError.classList.remove("popup__error_visible");
  constants.nameInputError.textContent = "";
  constants.jobInputError.classList.remove("popup__error_visible");
  constants.jobInputError.textContent = "";
}

// Сброс полей формы добавления карты
function resetAddPopupFields() {
  constants.placeName.classList.remove("popup__input_type_error");
  constants.placeLink.classList.remove("popup__input_type_error");
  constants.placeNameInputError.classList.remove("popup__error_visible");
  constants.placeNameInputError.textContent = "";
  constants.placeLinkInputError.classList.remove("popup__error_visible");
  constants.placeLinkInputError.textContent = "";
}

// Закрытие на ESC
function closeOnEsc() {
  window.onkeyup = (event) => {
    if (event.keyCode == constants.escKeyCode) {
      // Активный попап
      const activePopup = document.querySelector(".popup_opened");
      closePopup(activePopup);
      constants.popupAddForm.reset();
    }
  };
}

// закрытие попапа редактирования
const popupEditCloseButton = constants.editPopup.querySelector(
  ".popup__close-button"
);
popupEditCloseButton.addEventListener("click", (event) => {
  const clickClose = event.target.closest(".popup");
  closePopup(clickClose);
  // resetEditPopupFields(popupEditCloseButton);
});

// закрытие попапа добавления
const cardAddCloseButton = constants.addPopup.querySelector(
  ".popup__close-button"
);
cardAddCloseButton.addEventListener("click", (event) => {
  const clickClose = event.target.closest(".popup");
  closePopup(clickClose);
  constants.popupAddForm.reset();
  // resetAddPopupFields(cardAddCloseButton);
});

// закрытие попапа с фото
const photoCloseButton = constants.openPicturePopup.querySelector(
  ".popup__close-button"
);
photoCloseButton.addEventListener("click", (event) => {
  const clickClose = event.target.closest(".popup");
  closePopup(clickClose);
});

//сохранение профиля
constants.profileSaveButton.addEventListener("click", (event) => {
  //отмена поведения
  event.preventDefault();
  //заполнение полей из введенных данных
  constants.profileName.textContent = constants.nameInput.value;
  constants.profileJob.textContent = constants.jobInput.value;
  //сброс полей формы
  constants.popupAddForm.reset();
  //закрытие попапа
  const clickClose = event.target.closest(".popup");
  closePopup(clickClose);
});

//добавление карточки
constants.cardSaveButton.addEventListener("click", (event) => {
  //отмена поведения
  event.preventDefault();
  //создание объекта из введенных данных
  const newCard = {
      name: constants.placeName.value,
      link: constants.placeLink.value,
    };

  const addCard = new Card(newCard, ".cardTemplate");
  const cardElement = addCard.generateCard();
  constants.cardsContainer.prepend(cardElement);

  //сброс полей формы
  constants.popupAddForm.reset();
  //закрытие попапа
  const clickClose = event.target.closest(".popup");
  closePopup(clickClose);
});

//слушатель на кнопке редактирования профиля
constants.profileEditButton.addEventListener("click", function () {
  constants.nameInput.value = constants.profileName.textContent;
  constants.jobInput.value = constants.profileJob.textContent;
  openPopup(constants.editPopup);
  resetEditPopupFields()
});

//слушатель на кнопке добавления карточки
constants.cardAddButton.addEventListener("click", function () {
  openPopup(constants.addPopup);
  resetAddPopupFields()
});

//слушатель на оверлее попапа редактирования
constants.editOverlay.addEventListener("click", function () {
  closePopup(constants.editPopup);
});

//слушатель на оверлее попапа добавления
constants.addOverlay.addEventListener("click", function () {
  closePopup(constants.addPopup);
  constants.popupAddForm.reset();
});

//слушатель на оверлее попапа с фото
constants.fullScreenOverlay.addEventListener("click", function () {
  closePopup(constants.openPicturePopup);
});

initialCards.forEach((item) => {
  const card = new Card(item, ".cardTemplate");
  const cardExample = card.generateCard();

  constants.cardsContainer.append(cardExample);
});

// Создание классов валидации
const editPopupValidation = new FormValidator(
  enableValidation,
  constants.editPopup
);

editPopupValidation.enableValidation();

const addPopupValidation = new FormValidator(
  enableValidation,
  constants.addPopup
);

addPopupValidation.enableValidation();

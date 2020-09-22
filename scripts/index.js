// Импорты
import { Card } from "./Card.js";
import * as constants from "./constants.js";

// Открытие попапа
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  constants.profileSaveButton.setAttribute("disabled", true);
  constants.profileSaveButton.classList.add("popup__button_disabled");
  constants.cardSaveButton.setAttribute("disabled", true);
  constants.cardSaveButton.classList.add("popup__button_disabled");
  closeOnEsc(popup);
}

// Закрытие попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  window.onkeydown = null;
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
  window.onkeydown = (event) => {
    if (event.keyCode == 27) {
      closePopup(constants.addPopup);
      closePopup(constants.editPopup);
      closePopup(constants.openPicturePopup);
      resetEditPopupFields(constants.editPopup);
      resetAddPopupFields(constants.cardAddCloseButton);
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
  resetEditPopupFields(popupEditCloseButton);
});

// закрытие попапа добавления
const cardAddCloseButton = constants.addPopup.querySelector(
  ".popup__close-button"
);
cardAddCloseButton.addEventListener("click", (event) => {
  const clickClose = event.target.closest(".popup");
  closePopup(clickClose);
  constants.popupAddForm.reset();
  resetAddPopupFields(cardAddCloseButton);
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
  const newCard = [
    {
      name: constants.placeName.value,
      link: constants.placeLink.value,
    },
  ];

  newCard.forEach((item) => {
    const addCard = new Card(item, ".cardTemplate");
    const cardElement = addCard.generateCard();

    constants.cardsContainer.prepend(cardElement);
  });

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
});

//слушатель на кнопке добавления карточки
constants.cardAddButton.addEventListener("click", function () {
  openPopup(constants.addPopup);
});

//слушатель на оверлее попапа редактирования
constants.editOverlay.addEventListener("click", function () {
  closePopup(constants.editPopup);
  resetEditPopupFields();
});

//слушатель на оверлее попапа добавления
constants.addOverlay.addEventListener("click", function () {
  closePopup(constants.addPopup);
  resetAddPopupFields();
  constants.popupAddForm.reset();
});

//слушатель на оверлее попапа с фото
constants.fullScreenOverlay.addEventListener("click", function () {
  closePopup(constants.openPicturePopup);
});

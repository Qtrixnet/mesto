// Импорты
import { Card } from "./Card.js";
import {
    escKeyCode,
    popupAddForm,
    editPopup,
    addPopup,
    openPicturePopup,
    profileSaveButton,
    profileEditButton,
    profileName,
    profileJob,
    cardSaveButton,
    placeName,
    placeLink,
    nameInput,
    jobInput,
    cardsContainer,
    cardAddButton,
    editOverlay,
    addOverlay,
    fullScreenOverlay,
} from "./constants.js";
import { initialCards } from "./initialCards.js";
import { FormValidator, enableValidation } from "./FormValidator.js";

// Создание классов и активация валидации
const editPopupValidation = new FormValidator(enableValidation, editPopup),
    addPopupValidation = new FormValidator(enableValidation, addPopup);

editPopupValidation.enableValidation();
addPopupValidation.enableValidation();

// Открытие попапа
export function openPopup(popup) {
    popup.classList.add("popup_opened");
    closeOnEsc(popup);
}

// Закрытие попапа
function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.onkeyup = null;
}

// Закрытие на ESC
function closeOnEsc() {
    document.onkeyup = (event) => {
        if (event.keyCode === escKeyCode) {
            // Активный попап
            const activePopup = document.querySelector(".popup_opened");
            closePopup(activePopup);
            popupAddForm.reset();
        }
    };
}

// закрытие попапа редактирования
const popupEditCloseButton = editPopup.querySelector(".popup__close-button");
popupEditCloseButton.addEventListener("click", (event) => {
    const clickClose = event.target.closest(".popup");
    closePopup(clickClose);
});

// закрытие попапа добавления
const cardAddCloseButton = addPopup.querySelector(".popup__close-button");
cardAddCloseButton.addEventListener("click", (event) => {
    const clickClose = event.target.closest(".popup");
    closePopup(clickClose);
    popupAddForm.reset();
});

// закрытие попапа с фото
const photoCloseButton = openPicturePopup.querySelector(".popup__close-button");
photoCloseButton.addEventListener("click", (event) => {
    const clickClose = event.target.closest(".popup");
    closePopup(clickClose);
});

//сохранение профиля
profileSaveButton.addEventListener("click", (event) => {
    //отмена поведения
    event.preventDefault();
    //заполнение полей из введенных данных
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    //сброс полей формы
    popupAddForm.reset();
    //закрытие попапа
    const clickClose = event.target.closest(".popup");
    closePopup(clickClose);
});

//добавление карточки
cardSaveButton.addEventListener("click", (event) => {
    //отмена поведения
    event.preventDefault();
    //создание объекта из введенных данных
    const newCard = {
        name: placeName.value,
        link: placeLink.value,
    };

    const addCard = new Card(newCard, ".cardTemplate");
    const cardElement = addCard.generateCard();
    cardsContainer.prepend(cardElement);

    //сброс полей формы
    popupAddForm.reset();
    //закрытие попапа
    const clickClose = event.target.closest(".popup");
    closePopup(clickClose);
});

//слушатель на кнопке редактирования профиля
profileEditButton.addEventListener("click", function() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(editPopup);
    editPopupValidation.hideAllErrors();
});

//слушатель на кнопке добавления карточки
cardAddButton.addEventListener("click", function() {
    openPopup(addPopup);
    addPopupValidation.hideAllErrors();
});

//слушатель на оверлее попапа редактирования
editOverlay.addEventListener("click", function() {
    closePopup(editPopup);
});

//слушатель на оверлее попапа добавления
addOverlay.addEventListener("click", function() {
    closePopup(addPopup);
    popupAddForm.reset();
});

//слушатель на оверлее попапа с фото
fullScreenOverlay.addEventListener("click", function() {
    closePopup(openPicturePopup);
});

initialCards.forEach((item) => {
    const card = new Card(item, ".cardTemplate");
    const cardExample = card.generateCard();

    cardsContainer.append(cardExample);
});
//* Изначальные карточки
export const initialCards = [
  {
    name: "Morning in a tent",
    link: "./images/cards/camping.jpg",
  },
  {
    name: "Lonely house",
    link: "./images/cards/house.jpg",
  },
  {
    name: "Syracuse road, United States",
    link: "./images/cards/syracuse.jpg",
  },
  {
    name: "Canyon, United States",
    link: "./images/cards/united-states.jpg",
  },
  {
    name: "Mountains fog",
    link: "./images/cards/mountains.jpg",
  },
  {
    name: "Iceland",
    link: "./images/cards/iceland.jpg",
  },
];

//* Данные для валидации форм
export const enableValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inputErrorClass: "popup__input_type_error",
  inputError: ".popup__input-error",
  errorClass: "popup__input-error_visible",
};

//* Основные константы
export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__job");

export const profileEditButton = document.querySelector(
  ".profile__edit-button"
);
export const editProfilePopup = document.querySelector("#editProfile");
export const editProfilePopupForm = editProfilePopup.querySelector(
  ".popup__form"
);
export const editProfileNameInput = editProfilePopupForm.querySelector(
  "#popup__name-input"
);
export const editProfileJobInput = editProfilePopupForm.querySelector(
  "#popup__job-input"
);

export const profileAddButton = document.querySelector(".profile__add-button");
export const addCardPopup = document.querySelector("#addCard");

export const openPicturePopup = document.querySelector("#openPicture");

export const elementsList = document.querySelector(".elements__list");

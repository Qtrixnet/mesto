// константа с кодом клавиши ESC
export const escKeyCode = 27;

//Разметка шаблона карточки
export const cardTemplate = document.querySelector(".cardTemplate");

//Поля профиля для вставки значений из формы
export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__job");

//Редактирование
//Попап редактирования
export const editPopup = document.getElementById("editProfile");
//кнопка редактирования профиля
export const profileEditButton = document.querySelector(
  ".profile__edit-button"
);
//кнопка сохранения профиля
export const profileSaveButton = editPopup.querySelector(".popup__button");
//форма добавления карточки
export const profileEditForm = document.forms.profile;
//инпуты в форме редактирования
export const nameInput = profileEditForm.elements.name;
export const jobInput = profileEditForm.elements.job;
//поле с ошибкой
export const nameInputError = profileEditForm.querySelector(
  "#popup__name-input-error"
);
export const jobInputError = profileEditForm.querySelector(
  "#popup__job-input-error"
);
export const editOverlay = editPopup.querySelector(".popup__overlay");

//Добавление
//Попап добавления
export const addPopup = document.getElementById("addCard");
//кнопка добавления карточки
export const cardAddButton = document.querySelector(".profile__add-button");
//форма добавления карточки
export const popupAddForm = document.forms.newPlace;
//кнопка сохранения карточки
export const cardSaveButton = addPopup.querySelector(".popup__button");
//инпуты в форме добавления
export const placeName = popupAddForm.elements.placeName;
export const placeLink = popupAddForm.elements.placeLink;
//поле с ошибкой
export const placeNameInputError = popupAddForm.querySelector(
  "#popup__placeName-input-error"
);
export const placeLinkInputError = popupAddForm.querySelector(
  "#popup__placeLink-input-error"
);
export const addOverlay = addPopup.querySelector(".popup__overlay");

//Просмотр фото
//Попап просмотра
export const openPicturePopup = document.getElementById("openPicture");
//выбираем картинку и ее подпись
export const popupPicture = document.querySelector(".popup__image");
export const popupDescription = document.querySelector(
  ".popup__image-subtitle"
);
export const fullScreenOverlay = openPicturePopup.querySelector(
  ".popup__overlay"
);

//контейнер для вставки карточек
export const cardsContainer = document.querySelector(".elements__list");

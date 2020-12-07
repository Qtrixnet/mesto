// константа с кодом клавиши ESC
const escKeyCode = 27,
    //Разметка шаблона карточки
    cardTemplate = document.querySelector(".cardTemplate"),
    //Поля профиля для вставки значений из формы
    profileName = document.querySelector(".profile__name"),
    profileJob = document.querySelector(".profile__job"),
    //Редактирование
    //Попап редактирования
    editPopup = document.getElementById("editProfile"),
    //кнопка редактирования профиля
    profileEditButton = document.querySelector(".profile__edit-button"),
    //кнопка сохранения профиля
    profileSaveButton = editPopup.querySelector(".popup__button"),
    //форма добавления карточки
    profileEditForm = document.forms.profile,
    //инпуты в форме редактирования
    nameInput = profileEditForm.elements.name,
    jobInput = profileEditForm.elements.job,
    //поле с ошибкой
    nameInputError = profileEditForm.querySelector("#popup__name-input-error"),
    jobInputError = profileEditForm.querySelector("#popup__job-input-error"),
    editOverlay = editPopup.querySelector(".popup__overlay"),
    //Добавление
    //Попап добавления
    addPopup = document.getElementById("addCard"),
    //кнопка добавления карточки
    cardAddButton = document.querySelector(".profile__add-button"),
    //форма добавления карточки
    popupAddForm = document.forms.newPlace,
    //кнопка сохранения карточки
    cardSaveButton = addPopup.querySelector(".popup__button"),
    //инпуты в форме добавления
    placeName = popupAddForm.elements.placeName,
    placeLink = popupAddForm.elements.placeLink,
    //поле с ошибкой
    placeNameInputError = popupAddForm.querySelector(
        "#popup__placeName-input-error"
    ),
    placeLinkInputError = popupAddForm.querySelector(
        "#popup__placeLink-input-error"
    ),
    addOverlay = addPopup.querySelector(".popup__overlay"),
    //Просмотр фото
    //Попап просмотр
    openPicturePopup = document.getElementById("openPicture"),
    //выбираем картинку и ее подпись
    popupPicture = document.querySelector(".popup__image"),
    popupDescription = document.querySelector(".popup__image-subtitle"),
    fullScreenOverlay = openPicturePopup.querySelector(".popup__overlay"),
    //контейнер для вставки карточек
    cardsContainer = document.querySelector(".elements__list");

export {
    escKeyCode,
    cardTemplate,
    profileName,
    profileJob,
    editPopup,
    profileEditButton,
    nameInput,
    jobInput,
    nameInputError,
    jobInputError,
    editOverlay,
    addPopup,
    cardAddButton,
    popupAddForm,
    cardSaveButton,
    placeName,
    placeLink,
    placeNameInputError,
    placeLinkInputError,
    addOverlay,
    openPicturePopup,
    popupPicture,
    popupDescription,
    fullScreenOverlay,
    cardsContainer,
    profileSaveButton,
};
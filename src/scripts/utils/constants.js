// //* Импорт изображений для Webpack
// import morning from '../../images/cards/camping.jpg';
// import house from '../../images/cards/house.jpg';
// import syracuse from '../../images/cards/syracuse.jpg';
// import canyon from '../../images/cards/united-states.jpg';
// import mountainsFog from '../../images/cards/mountains.jpg';
// import iceland from '../../images/cards/iceland.jpg';
// import zion from '../../images/cards/zion-national-park.jpg';
// import grandCanyon from '../../images/cards/grandc.jpg';
// import moab from '../../images/cards/moab.jpg';


// //* Изначальные карточки
// export const сards = [
//   {
//     name: "Утро в палатках",
//     link: morning,
//   },
//   {
//     name: "Одинокий домик",
//     link: house,
//   },
//   {
//     name: "Дорога в Сиракьюс, США",
//     link: syracuse,
//   },
//   {
//     name: "Каньон, США",
//     link: canyon,
//   },
//   {
//     name: "Горный туман",
//     link: mountainsFog,
//   },
//   {
//     name: "Айслэнд",
//     link: iceland,
//   },
//   {
//     name: "Национальный парк Сион, США",
//     link: zion,
//   },
//   {
//     name: "Национальный парк Гранд Каньон, США",
//     link: grandCanyon,
//   },
//   {
//     name: "Моаб, США",
//     link: moab,
//   },
// ];

//* Разворачиваем массив с карточками для отображения по порядку через prepend
// export const initialCards = сards.reverse();

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
export const profileAvatar = document.querySelector(".profile__avatar");

export const profileEditButton = document.querySelector(
  ".profile__edit-button"
);
export const profileAvatarEditButton = document.querySelector(".profile__avatar-edit-button");
export const avatarEditPopup = document.querySelector("#update");
export const cardDeletePopup = document.querySelector("#confirm");
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
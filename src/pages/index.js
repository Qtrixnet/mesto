import "./index.css";

import { FormValidator } from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import { Card } from "../scripts/components/Card.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Api from "../scripts/components/Api.js";
import {
  initialCards as items,
  editProfilePopup,
  profileEditButton,
  addCardPopup,
  profileJob,
  profileName,
  profileAvatar,
  elementsList,
  openPicturePopup,
  editProfileNameInput,
  editProfileJobInput,
  enableValidation,
  profileAddButton,
} from "../scripts/utils/constants.js";

window.addEventListener("DOMContentLoaded", () => {

  const api = new Api({
    serverUrl: "https://mesto.nomoreparties.co/v1/cohort-19/",
    token: "4fc24223-fbb6-4e5b-bedd-d51fcb2b9911",
  });

  let profileId;

  Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then((result) => {
      const userInfoObj = result[0];
      profileId = result[0]._id;
      userInfo.setUserInfo(userInfoObj);
      userInfo.setUserAvatar(userInfoObj);
      section._renderer(result[1]);
    })
    .catch((err) => console.log(err));

  //* Попап с фото
  const popupWithImage = new PopupWithImage(openPicturePopup);
  popupWithImage.setEventListeners();

  //* Открытие попапа с фото
  const openImagePopup = (evt) => {
    const data = {
      image: evt.target.src,
      text: evt.target
        .closest(".elements__list-item")
        .querySelector(".elements__text").textContent,
    };
    popupWithImage.open(data);
  };

  //* Создание карточки
  const createCard = (data) => {
    const card = new Card(data, ".cardTemplate", openImagePopup);
    const cardElement = card.createCardElement(data);
    return cardElement;
  };

  //* Генерация карточек
  const section = new Section(
    {
      renderItems: (data) => {
        section.addItem(createCard(data));
      },
    },
    elementsList
  );
  section.renderItems(items);

  //* Попап редактирования профиля
  const userInfo = new UserInfo({ profileName, profileJob, profileAvatar });

  const editPopup = new PopupWithForm(editProfilePopup, {
    formSubmitCallBack: (data, button) => {
      button.textContent = 'Сохранение...';
      api.editProfile(data)
      .then((res) => {
        console.log(res)
        userInfo.setUserInfo(res); 
        editPopup.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        button.textContent = "Сохранить"
      })
    },
  });
  editPopup.setEventListeners();

  //* Попап добавления карточки
  const addNewCardPopup = new PopupWithForm(addCardPopup, {
    formSubmitCallBack: (data) => {
      const item = {
        name: data.placeName,
        link: data.placeLink,
      };
      section.addItem(createCard(item), true);
      addNewCardPopup.close();
    },
  });
  addNewCardPopup.setEventListeners();

  //* Создание классов валидации
  const editPopupValidation = new FormValidator(
      enableValidation,
      editProfilePopup
    ),
    addPopupValidation = new FormValidator(enableValidation, addCardPopup);

  //* Активация валидации
  editPopupValidation.enableValidation();
  addPopupValidation.enableValidation();

  //* Установка слушателей
  profileEditButton.addEventListener("click", () => {
    const data = userInfo.getUserInfo();
    editProfileNameInput.value = data.name;
    editProfileJobInput.value = data.job;
    editPopupValidation.hideAllErrors();
    editPopup.open();
    profileEditButton.blur();
  });
  profileAddButton.addEventListener("click", () => {
    addNewCardPopup.open();
    profileAddButton.blur();
    addPopupValidation.hideAllErrors();
  });
});

import "./index.css";

import { FormValidator } from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import { Card } from "../scripts/components/Card.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupConfirm from "../scripts/components/PopoupConfirm";
import Api from "../scripts/components/Api.js";
import {
  editProfilePopup,
  avatarEditPopup,
  profileEditButton,
  profileAvatarEditButton,
  addCardPopup,
  cardDeletePopup,
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

  //* Переменная с id пользователя
  let userId;

  //* Запрос данных сервера для превой отрисовки страницы
  Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then((res) => {
      console.log(res[1]);
      const userData = res[0]; //* Объект с данными пользователя
      // console.log(userData);
      userId = userData._id;
      userInfo.setUserInfo(userData);
      userInfo.setUserAvatar(userData);
      section.renderItems(res[1].reverse());
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

  //! Попап удаления карточки
  const popupDeleteImage = new PopupConfirm(cardDeletePopup, {
    formSubmitCallBack: (data) => {
      api
        .deleteCard(data._id)
        .then(() => {
          data.item.remove();
          popupDeleteImage.close();
        })
        .catch((err) => console.log(err));
    },
  });
  popupDeleteImage.setEventListeners();

  //* Генерация карточек
  const section = new Section(
    {
      renderItems: (data) => {
        section.addItem(createCard(data));
      },
    },
    elementsList
  );

  //* Попап редактирования профиля
  const userInfo = new UserInfo({ profileName, profileJob, profileAvatar });

  const editPopup = new PopupWithForm(editProfilePopup, {
    formSubmitCallBack: (data, button) => {
      button.textContent = "Сохранение...";
      api
        .editProfile(data)
        .then((res) => {
          userInfo.setUserInfo(res);
          editPopup.close();
        })
        .catch((err) => console.log(err))
        .finally(() => {
          button.textContent = "Сохранить";
        });
    },
  });
  editPopup.setEventListeners();

  //* Попап редактирования аватарки
  const avatarEdit = new PopupWithForm(avatarEditPopup, {
    formSubmitCallBack: (data, button) => {
      button.textContent = "Сохранение...";
      api
        .editAvatar(data)
        .then((res) => {
          userInfo.setUserAvatar(res);
          avatarEdit.close();
        })
        .catch((err) => console.log(err))
        .finally(() => {
          button.textContent = "Сохранить";
        });
    },
  });
  avatarEdit.setEventListeners();

  //* Попап добавления карточки
  const addNewCardPopup = new PopupWithForm(addCardPopup, {
    formSubmitCallBack: (data, button) => {
      button.textContent = "Сохранение...";
      const item = {
        name: data.placeName,
        link: data.placeLink,
      };
      console.log(`Данные отправленные из попапа добавления карточки:`, item)
      api.addNewCard(item)
      .then((res) => {
        section.addItem(createCard(res), true);
        addNewCardPopup.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        button.textContent = "Сохранить";
      });
    },
  });
  addNewCardPopup.setEventListeners();

  //* Создание классов валидации
  const editPopupValidation = new FormValidator(
      enableValidation,
      editProfilePopup
    ),
    addPopupValidation = new FormValidator(enableValidation, addCardPopup),
    avatarEditPopopValidation = new FormValidator(
      enableValidation,
      avatarEditPopup
    );

  //* Активация валидации
  editPopupValidation.enableValidation();
  addPopupValidation.enableValidation();
  avatarEditPopopValidation.enableValidation();

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
  profileAvatarEditButton.addEventListener("click", () => {
    avatarEdit.open();
    profileAvatarEditButton.blur();
    avatarEditPopopValidation.hideAllErrors();
  });
});

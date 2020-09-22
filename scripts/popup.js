function openPopup(popup) {
  popup.classList.add("popup_opened");
  profileSaveButton.setAttribute("disabled", true);
  profileSaveButton.classList.add("popup__button_disabled");
  cardSaveButton.setAttribute("disabled", true);
  cardSaveButton.classList.add("popup__button_disabled");
  closeOnEsc(popup);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  window.onkeydown = null;
}

function resetEditPopupFields() {
  nameInput.classList.remove("popup__input_type_error");
  jobInput.classList.remove("popup__input_type_error");
  nameInputError.classList.remove("popup__error_visible");
  nameInputError.textContent = "";
  jobInputError.classList.remove("popup__error_visible");
  jobInputError.textContent = "";
}

function resetAddPopupFields() {
  placeName.classList.remove("popup__input_type_error");
  placeLink.classList.remove("popup__input_type_error");
  placeNameInputError.classList.remove("popup__error_visible");
  placeNameInputError.textContent = "";
  placeLinkInputError.classList.remove("popup__error_visible");
  placeLinkInputError.textContent = "";
}

function closeOnEsc() {
  window.onkeydown = (event) => {
    if (event.keyCode == 27) {
      closePopup(addPopup);
      closePopup(editPopup);
      closePopup(openPicturePopup);
      resetEditPopupFields(editPopup);
      resetAddPopupFields(cardAddCloseButton);
      popupAddForm.reset();
    }
  };
}

// закрытие попапа редактирования
const popupEditCloseButton = editPopup.querySelector(".popup__close-button");
popupEditCloseButton.addEventListener("click", (event) => {
  const clickClose = event.target.closest(".popup");
  closePopup(clickClose);
  resetEditPopupFields(popupEditCloseButton);
});

// закрытие попапа добавления
const cardAddCloseButton = addPopup.querySelector(".popup__close-button");
cardAddCloseButton.addEventListener("click", (event) => {
  const clickClose = event.target.closest(".popup");
  closePopup(clickClose);
  popupAddForm.reset();
  resetAddPopupFields(cardAddCloseButton);
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
  const card = new Card(item, ".cardTemplate");
  const cardElement = card.generateCard();

  cardsContainer.append(cardElement);
  //вызов функции добавления карточки с новым объектом
  // addCardToContainer(newCard);
  //сброс полей формы
  popupAddForm.reset();
  //закрытие попапа
  const clickClose = event.target.closest(".popup");
  closePopup(clickClose);
});

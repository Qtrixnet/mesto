'use strict';
//массив с карточками
const initialCards = [
{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}
];

//Шаблон карточки
const cardTemplate = document.querySelector('.cardTemplate');

//Поля профиля для вставки значений из формы
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

//Редактирование
//Попап редактирования
const editPopup = document.getElementById('editProfile');
//кнопка редактирования профиля
const profileEditButton = document.querySelector('.profile__edit-button');
//кнопка сохранения профиля
const profileSaveButton = editPopup.querySelector('.popup__button');
//форма добавления карточки
const profileEditForm = document.forms.profile;
//инпуты в форме редактирования
const nameInput = profileEditForm.elements.name;
const jobInput = profileEditForm.elements.job;
//поле с ошибкой
const nameInputError = profileEditForm.querySelector('#popup__name-input-error');
const jobInputError = profileEditForm.querySelector('#popup__job-input-error');
const editOverlay = editPopup.querySelector('.popup__overlay');

//Добавление
//Попап добавления
const addPopup = document.getElementById('addCard');
//кнопка добавления карточки
const cardAddButton = document.querySelector('.profile__add-button');
//форма добавления карточки
const popupAddForm = document.forms.newPlace;
//кнопка сохранения карточки
const cardSaveButton = addPopup.querySelector('.popup__button');
//инпуты в форме добавления
const placeName = popupAddForm.elements.placeName;
const placeLink = popupAddForm.elements.placeLink;
//поле с ошибкой
const placeNameInputError = popupAddForm.querySelector('#popup__placeName-input-error');
const placeLinkInputError = popupAddForm.querySelector('#popup__placeLink-input-error');
const addOverlay = addPopup.querySelector('.popup__overlay');

//Просмотр фото
//Попап просмотра
const openPicturePopup = document.getElementById('openPicture');
//выбираем картинку и ее подпись
const popupPicture = document.querySelector('.popup__image');
const popupDescription = document.querySelector('.popup__image-subtitle');
const fullScreenOverlay = openPicturePopup.querySelector('.popup__overlay');

//контейнер для вставки карточек
const cardsContainer = document.querySelector('.elements__list');

//Функция открытия / закрытия попапа
function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}

function resetEditPopupFields() {
  nameInput.classList.remove('popup__input_type_error');
  jobInput.classList.remove('popup__input_type_error');
  nameInputError.classList.remove('popup__error_visible');
  nameInputError.textContent = '';
  jobInputError.classList.remove('popup__error_visible');
  jobInputError.textContent = '';
}

function resetAddPopupFields() {
  placeName.classList.remove('popup__input_type_error');
  placeLink.classList.remove('popup__input_type_error');
  placeNameInputError.classList.remove('popup__error_visible');
  placeNameInputError.textContent = '';
  placeLinkInputError.classList.remove('popup__error_visible');
  placeLinkInputError.textContent = '';
}

function closeOnEsc() {
    window.onkeydown = event => {
    if ( event.keyCode == 27 ) {
      addPopup.classList.remove('popup_opened');
      editPopup.classList.remove('popup_opened');
      openPicturePopup.classList.remove('popup_opened');
      resetEditPopupFields(editPopup);
      resetAddPopupFields(cardAddCloseButton);
      popupAddForm.reset();
      window.onkeydown = null;
    }
  };
}

//добавление карточек
const addCardToContainer = (cardElement)  => {
  //клонирование карточки
  const cardsElement = cardTemplate.content.cloneNode(true);
  //название карточки
  cardsElement.querySelector('.elements__text').textContent = cardElement.name;
  //картинка карточки
  cardsElement.querySelector('.elements__picture').src = cardElement.link;
  //алттернативное описание
  cardsElement.querySelector('.elements__picture').alt = cardElement.name;
  //лайк
  cardsElement.querySelector('.elements__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like-button_active');
    evt.target.classList.toggle('heartbeat');
  });

  //кнопка удаления карточки
  cardsElement.querySelector('.elements__delete-button').addEventListener('click', event => {
    const cardItem = event.target.closest('.elements__list-item');
    cardItem.remove();
  });

  //данные для попапа с фото
  cardsElement.querySelector('.elements__picture').addEventListener('click', event => {
    const cardLink = event.target.src;
    const cardName = event.target.closest('.elements__list-item');
    const cardText = cardName.querySelector('.elements__text').textContent;

    // открытие попапа с фото
    togglePopup(openPicturePopup);
    // присвоение ссылки картинке
    popupPicture.src = cardLink;
    // присвоение названия фото
    popupDescription.textContent = cardText;
    closeOnEsc(this);
  });

  //вставка карточки в дом
  cardsContainer.prepend(cardsElement);
};

// разворачиваем массив
const reversCards = initialCards.reverse();
//рендер элементов
reversCards.forEach(addCardToContainer);

// закрытие попапа редактирования
const popupEditCloseButton = editPopup.querySelector('.popup__close-button');
popupEditCloseButton.addEventListener('click', event => {
  const clickClose = event.target.closest('.popup');
  togglePopup(clickClose);
  resetEditPopupFields(popupEditCloseButton);
  window.onkeydown = null;
});

// закрытие попапа добавления
const cardAddCloseButton = addPopup.querySelector('.popup__close-button');
cardAddCloseButton.addEventListener('click', event => {
  const clickClose = event.target.closest('.popup');
  togglePopup(clickClose);
  popupAddForm.reset();
  resetAddPopupFields(cardAddCloseButton);
  window.onkeydown = null;
});

// закрытие попапа с фото
const photoCloseButton = openPicturePopup.querySelector('.popup__close-button');
photoCloseButton.addEventListener('click', event => {
  const clickClose = event.target.closest('.popup');
  togglePopup(clickClose);
  window.onkeydown = null;
});

//слушатель на кнопке редактирования профиля
profileEditButton.addEventListener('click', function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent; 
  togglePopup(editPopup);
  closeOnEsc(this);
});

//слушатель на кнопке добавления карточки
cardAddButton.addEventListener('click', function () {  
  togglePopup(addPopup);
  closeOnEsc(this);
});

//сохранение профиля
profileSaveButton.addEventListener('click', event => {
  //отмена поведения
    event.preventDefault();
  //заполнение полей из введенных данных
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
  //сброс полей формы
    popupAddForm.reset();
  //закрытие попапа
    const clickClose = event.target.closest('.popup');
    togglePopup(clickClose);
    window.onkeydown = null;
  });
  
//добавление карточки
cardSaveButton.addEventListener('click', event => {
//отмена поведения
  event.preventDefault();
//создание объекта из введенных данных
  const newCard = 
    {
      name: placeName.value,
      link: placeLink.value
    };
//вызов функции добавления карточки с новым объектом
  addCardToContainer(newCard);
//сброс полей формы
  popupAddForm.reset();
//закрытие попапа
  const clickClose = event.target.closest('.popup');
  togglePopup(clickClose);
  window.onkeydown = null;
});

editOverlay.addEventListener('click', function () {
  togglePopup(editPopup);
  resetEditPopupFields();
  window.onkeydown = null;
})

addOverlay.addEventListener('click', function () {
  togglePopup(addPopup);
  resetAddPopupFields();
  popupAddForm.reset();
  window.onkeydown = null;
})

fullScreenOverlay.addEventListener('click', function () {
  togglePopup(openPicturePopup);
  window.onkeydown = null;
})
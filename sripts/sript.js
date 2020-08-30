const popup = document.querySelector('.popup');                              // Находим блок с формой
const popupForm = document.querySelector('.popup__container');               // Находим форму
const popupOpenButton = document.querySelector('.profile__edit-button');     // Находим кнопку редактирования профиля
const popupCloseButton = popup.querySelector('.popup__close-button');        // Находим кнопку закрытия попапа
const popupSaveButton = popup.querySelector('.popup__save-button');          // Находим кнопку сохранения
const nameInput = popupForm.querySelector('.popup__input[name="name"]');      // Находим инпут с именем
const jobInput = popupForm.querySelector('.popup__input[name="job"]');        // Находим инпут с профессией
const profileName = document.querySelector('.profile__name');                // Находим элемент для вставки значений
const profileJob = document.querySelector('.profile__job');                  // Находим элемент для вставки значений

const cardsContainer = document.querySelector('.elements__list');
const cardAddButton = document.querySelector('profile__add-button');     // Находим кнопку добавления карточки

const popupToggle = function () {
  if (!popup.classList.contains('popup_opened')) {                           // Функция добавления / удаления класса видимости у попапа

  nameInput.value = profileName.textContent;                                  // Помещаем Имя в инпут формы
  jobInput.value = profileJob.textContent;                                    // Помещаем Профессию в инпут формы
  popup.classList.toggle('popup_opened');

  } else {
    popup.classList.toggle('popup_opened');
  }
}

function formSubmitHandler (evt) {
  evt.preventDefault();                                                      // Отменяем стандартное поведение формы

  // Вставляем значения инпутов в выбранные элементы
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  popupToggle();                                                             // Закрываем попап
}

// Слушатели
popupForm.addEventListener('submit', formSubmitHandler);                     // Добавляем слушателя кнопке сохранения 
popupOpenButton.addEventListener('click', popupToggle);                      // Добавляем слушателя кнопке редактирования профиля
popupCloseButton.addEventListener('click', popupToggle);                     // Добавляем слушателя кнопке закрытия попапа

// cardAddButton.addEventListener('click', function(evt) {
//   evt.target.classList.toggle('popup_opened');
// });                                                                        // Добавляем слушателя кнопке добавления места

cardAddButton.addEventListener('click', popupToggle);

const likeButton = document.querySelector('.elements__like-button');          // Находим кнопку сохранения

// function renderHasCards() {
//   resetButton.removeAttribute('disabled');
//   resetButton.classList.remove('input__btn_disabled');
//   noSongsElement.classList.add('no-songs_hidden');
// }

// function renderNoSongs() {
//   resetButton.setAttribute('disabled', true);
//   resetButton.classList.add('input__btn_disabled');
//   noSongsElement.classList.remove('no-songs_hidden');
// }



// function addCard (nameValue, imgLink) {
//   const cardTemplate = document.querySelector('#card').content;
//   const cardElement = cardTemplate.cloneNode(true);

//   cardElement.querySelector('.elements-text').textContent = nameValue;
//   cardElement.querySelector('.elements__picture').src = imgLink;
//   cardElement.querySelector('.elements__like-button').addEventListener('click', function (evt) {
//     evt.target.classList.toggle('song__like_active');
//   });
//   cardsContainer.append(cardElement);
// }

// cardAddButton.addEventListener('click', function () {
//   const pictureName = document.querySelector('.popup__input[name="pictureName"]');
//   const pictureLink = document.querySelector('.popup__input[name="pictureLink"]');

//   addCard(pictureName.value, pictureLink.value);
//   // renderHasCards();

//   pictureName.value = '';
//   pictureLink.value = '';
// });






// const popup = document.querySelector('.popup');                              // Находим блок с формой
// const popups = document.querySelectorAll('.popup');                          // Находим блоки с формой
// const popupForm = popup.querySelector('.popup__container');                  // Находим форму
// const profileEditButton = document.querySelector('.profile__edit-button');   // Находим кнопку редактирования профиля
// const popupCloseButton = popup.querySelector('.popup__close-button');        // Находим кнопку закрытия попапа
// const profileSaveButton = popup.querySelector('.popup__save-button');        // Находим кнопку сохранения
// const cardAddButton = document.querySelector('.profile__add-button');        // Находим кнопку добавления карточки
// const cardLikeButton = document.querySelector('.elements__like-button');     // Находим кнопку лайка
// const cardDeleteButton = document.querySelector('.elements__delete-button'); // Находим кнопку удаления

// const nameInput = popupForm.querySelector('.popup__input[name="name"]');     // Находим инпут с именем
// const jobInput = popupForm.querySelector('.popup__input[name="job"]');       // Находим инпут с профессией
// const profileName = document.querySelector('.profile__name');                // Находим элемент для вставки значений
// const profileJob = document.querySelector('.profile__job');                  // Находим элемент для вставки значений

// const popupToggle = function () {
//   if (!popup.classList.contains('popup_opened')) {                           // Функция добавления / удаления класса видимости у попапа
//     nameInput.value = profileName.textContent;                               // Помещаем Имя в инпут формы
//     jobInput.value = profileJob.textContent;                                 // Помещаем Профессию в инпут формы
//     popup.classList.toggle('popup_opened');
//   } else {
//     popup.classList.toggle('popup_opened');
//   }
// }

// function formSubmitHandler (evt) {
//   evt.preventDefault();                                                      // Отменяем стандартное поведение формы

//   // Вставляем значения инпутов в выбранные элементы
//   profileName.textContent = nameInput.value;
//   profileJob.textContent = jobInput.value;

//   popupToggle();                                                             // Закрываем попап
// }

// popupForm.addEventListener('submit', formSubmitHandler);                     // Добавляем слушателя кнопке сохранения 
// profileEditButton.addEventListener('click', popupToggle);                    // Добавляем слушателя кнопке редактирования профиля
// popupCloseButton.addEventListener('click', popupToggle);                     // Добавляем слушателя кнопке закрытия попапа
// cardAddButton.addEventListener('click', popupToggle);                        // Добавляем слушателя кнопке закрытия попапа

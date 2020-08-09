const popup = document.querySelector('.popup');                              // Находим блок с формой
const popupForm = document.querySelector('.popup__container');               // Находим форму
const popupOpenButton = document.querySelector('.profile__edit-button');     // Находим кнопку редактирования профиля
const popupCloseButton = popup.querySelector('.popup__close-button');        // Находим кнопку закрытия попапа
const popupSaveButton = popup.querySelector('.popup__save-button');          // Находим кнопку сохранения
const nameInput = document.querySelector('.popup__name');                    // Находим инпут с именем
const jobInput = document.querySelector('.popup__job');                      // Находим инпут с профессией

const popupToggle = function () {                                            // Функция добавления / удаления класса видимости у попапа
  popup.classList.toggle('popup_opened'); 
}

// Помещаем текстовое содержимое элементов в константы
const namePlaceholder = profile__name.textContent;                           // Имя
const jobPlaceholder = profile__job.textContent;                             // Профессия    

// Подставляем значения элементов профиля в инпуты
nameInput.setAttribute('value', namePlaceholder);                            // Имя
jobInput.setAttribute('value', jobPlaceholder);                              // Профессия

function formSubmitHandler (evt) {
  // Отменяем стандартное поведение формы
  evt.preventDefault(); 

  // Выбираем элементы для вставки значений
  const profileName = document.querySelector('.profile__name');
  const profileJob = document.querySelector('.profile__job');

  // Вставляем значения инпутов в выбранные элементы
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  // Закрываем попап
  popupToggle();
}

// Слушатели
popupForm.addEventListener('submit', formSubmitHandler);                     // Добавляем слушателя кнопке сохранения 
popupOpenButton.addEventListener('click', popupToggle);                      // Добавляем слушателя кнопке редактирования профиля
popupCloseButton.addEventListener('click', popupToggle);                     // Добавляем слушателя кнопке закрытия попапа

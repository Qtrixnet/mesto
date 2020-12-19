//* Родительский класс всех попапов
export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popupOverlay = this._popupSelector.querySelector(".popup__overlay");
    this._popupCloseButton = this._popupSelector.querySelector(
      ".popup__close-button"
    );
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  //* Расчет ширины вертикального скролла
  //* При открытии попапа блокируется прокрутка страницы и чтобы контент не дергался, странице добавляется граница справа шириной с полосу прокрутки
  _calcScroll() {
    const div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  //* Метод открытия попапа и блокировки скролла страницы
  open() {
    const scroll = this._calcScroll();
    document.addEventListener("keyup", this._handleEscClose);
    this._popupSelector.classList.add("popup_opened");
    document.body.style.overflow = "hidden";

    //* Добавление границы с шириной равной ширине скролла
    document.body.style.borderRight = `${scroll}px solid black`;
  }

  //* Метод закрытия попапа
  close() {
    document.removeEventListener("keyup", this._handleEscClose);
    this._popupSelector.classList.remove("popup_opened");
    document.body.style.overflow = "";
    document.body.style.borderRight = "0";
  }

  //* Метод закрытия на ESC
  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  //* Установка слушателей
  setEventListeners() {
    this._popupCloseButton.addEventListener("click", () => {
      this.close();
    });
    this._popupOverlay.addEventListener("click", () => {
      if (this._popupSelector.classList.contains("popup_opened")) {
        this.close();
      }
    });
  }
}

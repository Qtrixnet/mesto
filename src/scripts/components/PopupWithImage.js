import Popup from "./Popup.js";

//* Класс попапа с картинкой
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popupSelector.querySelector(".popup__image");
    this._imageSubtitle = this._popupSelector.querySelector(
      ".popup__image-subtitle"
    );
  }

  //* Перезапись родительского метода
  open(data) {
    this._image.src = data.image;
    this._image.alt = data.text;
    this._imageSubtitle.textContent = `${data.text} by Brent Olson 📷`;
    super.open();
  }
}

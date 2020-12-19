//* Класс размещения карточек на странице
export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = containerSelector;
  }

  //* Рендер карточек
  renderer(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  //* Добавление карточки
  addItem(element) {
    this._container.prepend(element);
  }
}

//* Класс с пользовательскими данными
export default class UserInfo {
  constructor({ profileName, profileJob }) {
    this._name = profileName;
    this._job = profileJob;
  }

  getInfo() {
    const userData = {
      name: this._name.textContent,
      job: this._job.textContent,
    };
    return userData;
  }

  setInfo(userData) {
    this._name.textContent = userData.name;
    this._job.textContent = userData.job;
  }
}

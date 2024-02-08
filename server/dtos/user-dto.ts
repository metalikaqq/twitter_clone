export default class UserDto {
  username;
  email;
  id;
  isActivated;

  constructor(model: { username: string; email: string; _id: string; isActivated: boolean; }) {
    this.username = model.username;
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
  }
}

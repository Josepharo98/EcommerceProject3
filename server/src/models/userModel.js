const { modelOptions, prop, getModelForClass } = require('@typegoose/typegoose');

class User {
  constructor() {
    this._id = undefined;
  }

  @prop({ required: true })
  name;

  @prop({ required: true, unique: true })
  email;

  @prop({ required: true })
  password;

  @prop({ required: true, default: false })
  isAdmin;
}

const UserModel = getModelForClass(User);

module.exports = { UserModel, User };

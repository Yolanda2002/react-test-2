import mongoose from 'mongoose';
import bcrypt from 'bcrypt';//用户验证

const Schema = mongoose.Schema;

const FavorateSchema = new Schema({
  username: { type: String, unique: true},
  favorate: [{
    id: { type: Number, unique: true }
  }]
});



//根据用户名查找用户
FavorateSchema.statics.findByUserName = function (username) {
  // console.log(this.find(), 'this.find')
  return this.findOne({ username: username });
};




export default mongoose.model('Favorate', FavorateSchema);

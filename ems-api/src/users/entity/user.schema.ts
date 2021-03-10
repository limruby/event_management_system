import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Role } from '../../utils/role/role.enum';

export type UserDocument = User & Document;

@Schema()
export class User {
  constructor(data: Partial<User> = {}) {
    Object.assign(this, data);
  }

  @Prop()
  _id: string; // max 12 char

  @Prop()
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  hash: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  birthday: Date;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  refresh: string;

  @Prop({ required: true })
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);

// const user = new Schema({
//   _id: String,
//   name: String,
//   email: { type: String, required: true },
//   admin: Boolean,
//   password: { type: String, required: true },
//   created_at: { type: Date, default: Date.now },
//   updated_at: { type: Date, default: Date.now }
// });

// /**
//  * On every save, add the date
//  */
// user.pre('save', function(next) {
//   const currentDate = new Date();

//   // this.updated_at = currentDate;
//   // if(!this.created_at) {
//   //   this.created_at = currentDate;
//   // }
  
//   // this.update({ updated_at: currentDate }, {}, function(err, resp) {
//   //   console.log(resp);
//   // });
//   // const created_at = this.getChanges().$set.created_at;
//   // if(!created_at) {
//   //   this.getChanges().$set.created_at = currentDate;
//   // }
//   next();
// });

/**
 * Serialize user to send it throw the JWT token
 */
// UserSchema.methods.removeSecret = function(user) {
//   return {
//     _id: user._id,
//     name: user.name,
//     email: user.email,
//     gender: user.gender,
//     birthday: user.birthday,
//     createdAt: user.createdAt,
//     updatedAt: user.updatedAt,
//   };
// };

// https://stackoverflow.com/questions/50360101/how-to-exclude-entity-field-from-returned-by-controller-json-nestjs-typeorm
export function removeSecret(user: User) {
  return new User({
    _id: user._id,
    name: user.name,
    email: user.email,
    gender: user.gender,
    birthday: user.birthday,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    roles: user.roles
  });
}
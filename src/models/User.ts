import {  model, Schema, Types } from "mongoose";
import {  UserDocument } from "../types";


export const userSchema = new Schema({
    name: String,
    username: String,
    email: String,
    companyId: {type: Types.ObjectId, ref: 'Company'}
})




userSchema.virtual('company', {
  ref: 'Company', 
  localField: 'companyId', 
  foreignField: '_id', 
  justOne: true

});
userSchema.set('toObject', { virtuals: true });
userSchema.set('toJSON', { virtuals: true });


export const UserModel = model<UserDocument>('User', userSchema)



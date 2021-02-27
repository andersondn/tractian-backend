import { Document, model, Schema, Types } from "mongoose";
import { AssetStatus, IAsset } from "../types";




export const assetSchema = new Schema({
    assetName: String,
    image: {type: String},
    description: String,
    model: String,
    healthScore: Number,
    maintainer: String,
    status: {type: String, enum:AssetStatus},
    unitId: {type: Types.ObjectId, ref: 'Unit'},
    userId: {type: Types.ObjectId, ref: 'User'}
})
///Aggregation with Unit model
assetSchema.virtual('unit', {
    ref: 'Unit', 
    localField: 'unitId', 
    foreignField: '_id', 
    justOne: true

  });
  ///Aggregation with User model
  assetSchema.virtual('user', {
    ref: 'User', 
    localField: 'userId', 
    foreignField: '_id', 
    justOne: true

  });

  assetSchema.virtual('imageUrl').get(function() {
    return this.image ? process.env.IMAGES_URL + this.image: null
  });

  assetSchema.set('toObject', { virtuals: true });
  assetSchema.set('toJSON', { virtuals: true });




export type AssetDocument  = IAsset & Document 
export const AssetModel = model<AssetDocument>('Asset', assetSchema)



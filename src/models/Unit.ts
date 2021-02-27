import { model, Schema, Types } from "mongoose";
import { UnitDocument } from "../types";

export const unitSchema = new Schema({
    unitName: String,
    companyId: { type: Types.ObjectId, ref: 'Company' },
})
unitSchema.virtual('company', {
    ref: 'Company',
    localField: 'companyId',
    foreignField: '_id',
    justOne: true

});
unitSchema.set('toObject', { virtuals: true });
unitSchema.set('toJSON', { virtuals: true });


export const UnitModel = model<UnitDocument>('Unit', unitSchema);
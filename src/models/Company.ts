import { model, Schema } from "mongoose";
import { CompanyDocument  } from '../types';

const companySchema = new Schema({
    companyName: String,

})


export const CompanyModel = model<CompanyDocument>('Company', companySchema)

import { Types, Document } from "mongoose";

export interface ICompany {
    name: String
}
export type CompanyDocument = ICompany & Document 


///User Interfaces
export interface IUser {
    name: String,
    username: String,
    email: String,
    companyId: Types.ObjectId
}
export type UserDocument  = IUser & Document 

///Unit Interfaces
export interface IUnit {
    unitName: String,
    companyId: Types.ObjectId,
}
export type UnitDocument = IUnit & Document 

///Asset Interfaces
export interface IAsset {
    assetName: String,
    image: String,
    description: String,
    model: String,
    status: AssetStatus,
    healthScore: Number,
    unitId: Types.ObjectId,
    userId: Types.ObjectId,
   
}
export type AssetDocument = IAsset & Document 

///Enum Status
export enum AssetStatus {
    inAlert = "ALERT",
    inOperation= "OPERATION",
    inDowntime = "DOWNTIME"
  
  }
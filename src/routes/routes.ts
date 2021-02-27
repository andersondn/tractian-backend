import { Router } from "express";
import AssetController from "../controllers/AssetController";
import CompanyController from "../controllers/CompanyController";
import UnitController from "../controllers/UnitController";
import UserController from "../controllers/UserController";


const routes = Router()



//Company routes
routes.get('/company',CompanyController.index)
routes.post('/company',CompanyController.create)
routes.get('/company/:companyId',CompanyController.find)
routes.put('/company/:companyId',CompanyController.update)
routes.delete('/company/:companyId',CompanyController.delete)

//User Routes
routes.get('/user',UserController.index)
routes.post('/user',UserController.create)
routes.get('/user/:userId',UserController.find)
routes.put('/user/:userId',UserController.update)
routes.delete('/user/:userId',UserController.delete)

//Unit Routes
routes.get('/unit',UnitController.index)
routes.post('/unit',UnitController.create)
routes.get('/unit/:unitId',UnitController.find)
routes.put('/unit/:unitId',UnitController.update)
routes.delete('/unit/:unitId',UnitController.delete)


//Unit Routes
routes.get('/asset',AssetController.index)
routes.post('/asset',AssetController.create)
routes.get('/asset/:assetId',AssetController.find)
routes.put('/asset/:assetId',AssetController.update)
routes.delete('/asset/:assetId',AssetController.delete)



export default routes
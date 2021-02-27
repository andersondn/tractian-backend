import { Request, Response } from "express"
import { CompanyModel } from '../models/Company';

export default {
    index: async (req: Request, res: Response) => {
        try {
            const companies = await CompanyModel.find()
            res.json(companies)
        } catch (error) {
            res.status(400).json({ error: "Não foi possível completar essa ação" })

        }
    },
    find: async (req:Request, res:Response) =>{
        try {
            const {companyId} = req.params;
            const company = await CompanyModel.findById(companyId)
            res.json(company)
        } catch (error) {
            res.status(400).json({ error: "Não foi possível completar essa ação" })

        }

    },
    create: async (req: Request, res: Response) => {
        try {
            const { companyName } = req.body
            const company = await CompanyModel.create({ companyName })
            res.json(company)

        } catch (error) {
            res.status(400).json({ error: "Não foi possível completar essa ação" })

        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const { companyId } = req.params;
            const { companyName } = req.body;
            const company = await CompanyModel.findByIdAndUpdate(companyId, { companyName }, { new: true })
            res.json(company)

        } catch (error) {
            res.status(400).json({ erro: "Não foi possível completar essa ação", error })


        }
    },
    delete: async (req:Request, res:Response) =>{
        try {
            const { companyId } = req.params;
            const company = await CompanyModel.findByIdAndDelete(companyId)
            res.json(company)
        } catch (error) {
            
        }

    }
}
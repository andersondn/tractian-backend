import { Request, Response } from "express"
import { UnitModel } from "../models/Unit"


export default {
    index: async (req: Request, res: Response) => {
        try {
            const units = await UnitModel
                .find()
                .populate({ path: 'company', select: 'companyName ' })

            res.json(units)
        } catch (error) {
            res.status(400).json({ error: "Não foi possível completar essa ação" })

        }
    },
    find: async (req: Request, res: Response) => {
        try {
            const { unitId } = req.params;
            const unit = await UnitModel
                .findById(unitId)
                .populate({ path: 'company', select: 'companyName ' })

            res.json(unit)
        } catch (error) {
            res.status(400).json({ error: "Não foi possível completar essa ação" })

        }

    },
    create: async (req: Request, res: Response) => {
        try {
            const { unitName, companyId } = req.body
            const unit = await UnitModel.create({ unitName, companyId })
            res.json(unit)

        } catch (error) {
            res.status(400).json({ error: "Não foi possível completar essa ação" })

        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const { unitId } = req.params;
            const { unitName, companyId } = req.body;
            const unit = await UnitModel
            .findByIdAndUpdate(unitId, { unitName, companyId }, { new: true })
            .populate({ path: 'company', select: 'companyName ' })

            res.json(unit)

        } catch (error) {
            res.status(400).json({ erro: "Não foi possível completar essa ação", error })


        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const { unitId } = req.params;
            const unit = await UnitModel.findByIdAndDelete(unitId)
            res.json(unit)
        } catch (error) {

        }

    }


}

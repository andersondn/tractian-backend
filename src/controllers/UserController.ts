import { Request, Response } from "express"
import { UserModel } from '../models/User';


export default {
    index: async (req: Request, res: Response) => {
        try {
            const users = await UserModel
                .find()
                .populate({ path: 'company', select: 'companyName ' })

            res.json(users)
        } catch (error) {
            res.status(400).json({ error: "Não foi possível completar essa ação" })

        }
    },
    find: async (req: Request, res: Response) => {
        try {
            const { userId } = req.params;
            const user = await UserModel.findById(userId)
            res.json(user)
        } catch (error) {
            res.status(400).json({ error: "Não foi possível completar essa ação" })

        }

    },
    create: async (req: Request, res: Response) => {
        try {
            const { name, userName, email, companyId } = req.body
            const user = await UserModel.create({ name, userName, email, companyId })
            res.json(user)

        } catch (error) {
            res.status(400).json({ error: "Não foi possível completar essa ação" })

        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const { userId } = req.params;
            const user = await UserModel
                .findByIdAndUpdate(userId, req.body, { new: true })
                .populate({ path: 'company' })

            res.json(user)

        } catch (error) {
            res.status(400).json({ erro: "Não foi possível completar essa ação", error })


        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const { userId } = req.params;
            const user = await UserModel.findByIdAndDelete(userId)
            res.json(user)
        } catch (error) {

        }

    }


}


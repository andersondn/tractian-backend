import { Request, Response } from "express"
import { AssetModel } from '../models/Asset';
import { v4 as uuidv4 } from 'uuid';

import fs from 'fs';


export default {
    index: async (req: Request, res: Response) => {
        try {
            const users = await AssetModel.find()
                .populate({ path: 'user', select: 'name' })
                .populate({ path: 'unit' , populate:{ path: 'company' }})


            res.json(users)
        } catch (error) {
            res.status(400)
                .json({ error: "Não foi possível completar essa ação" })

        }
    },
    find: async (req: Request, res: Response) => {
        try {
            const { assetId } = req.params;
            const user = await AssetModel
                .findById(assetId)
                .populate({ path: 'user', select: 'name' })
                .populate({ path: 'Unit' , populate:{ path: 'company' }})
            res.json(user)
        } catch (error) {
            res.status(400).json({ error: "Não foi possível completar essa ação" })

        }

    },
    create: async (req: Request, res: Response) => {

        try {
            const { imageBase64 } = req.body
            req.body.image = processImage(imageBase64)
            const asset = await AssetModel.create(req.body)
            res.json(asset)

        } catch (error) {
            res.status(400)
                .json({ error: "Não foi possível completar essa ação" })
                
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const { assetId } = req.params;
            const { imageBase64 } = req.body
            const image = processImage(imageBase64)
            if (image) {
                req.body.image = image
            }
            const User = await AssetModel
                .findByIdAndUpdate(assetId, req.body, { new: true })
                .populate({ path: 'user', select: 'name' })                .populate({ path: 'unit' , populate:{ path: 'company' }})
                


            res.json(User)

        } catch (error) {
            res.status(400)
                .json({ erro: "Não foi possível completar essa ação", error })


        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const { assetId } = req.params;
            const asset = await AssetModel.findByIdAndDelete(assetId)
            res.json(asset)
        } catch (error) {

        }

    }


}

const processImage = (imageBase64: String): String | null => {
    if (!imageBase64) {
        return null
    }
    const newFileName = uuidv4() + '.png';
    fs.writeFile(process.env.IMAGE_UPLOAD_PATH + newFileName, imageBase64.split(';base64,').pop(), { encoding: 'base64' }, function (err) {
    });

    return newFileName

}
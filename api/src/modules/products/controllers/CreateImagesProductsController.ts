import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreateImagesProductService} from "../services/CreateImagesProductService";

interface IFiles {
    filename: string;
}

class CreateImagesProductsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const images = req.files as IFiles[];
        const fileNames = images.map((file) => file.filename);
        const createImagesProductService = container.resolve(CreateImagesProductService);
        await createImagesProductService.execute({
            product_id: id, images_name: fileNames,
        });
        return res.status(201).send();
    }
}

export { CreateImagesProductsController };
import ApiResponseHandler from '../apiResponseHandler';
import { Request, Response, NextFunction } from 'express';
import { EchoMessage } from '../../../ts/types';
import FileService from '../../../services/fileService';

export default async (req: Request<{}, {}, {}, {fileName: string }>, res: Response<EchoMessage>, next: NextFunction) => {
    try {
        const file = FileService.getFile(req.query.fileName);
        // await ApiResponseHandler.success(req, res, file);
        res.sendFile(file!);
    } catch (error) {
        await ApiResponseHandler.error(req, res, error);
    }
};

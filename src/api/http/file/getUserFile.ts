import ApiResponseHandler from '../apiResponseHandler';
import { Request, Response, NextFunction } from 'express';
import { EchoMessage } from '../../../ts/types';
import FileService from '../../../services/fileService';
import fs from 'fs'

export default async (req: Request<{}, {}, {}, {fileName: string }>, res: Response<EchoMessage>, next: NextFunction) => {
    try {
        const file = FileService.getFile(req.query.fileName);
        await ApiResponseHandler.success(req, res, fs.readFileSync(file!));
        // res.sendFile(file!);
    } catch (error) {
        await ApiResponseHandler.error(req, res, error);
    }
};

import fs from 'fs'
import path from 'path'
import { HttpError } from '../utils/httpError'


export default class FileService {

    static getFile(fileName: string) {
        const splittedName = fileName.split('.')
        const dirPath = path.join(__dirname, '../../61_docs', `Пакет ${splittedName[0]}`)
        const files = fs.readdirSync(dirPath)
        let file
        for (const file of files) {
              if(file.startsWith(fileName)) return path.join(dirPath, file)
        }
        throw new HttpError(404, 'File not found')
    }
    
}   
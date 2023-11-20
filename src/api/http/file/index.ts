import { Application } from 'express';

export default (app: Application) => {
    app.use('/file', require('./getUserFile').default)
};

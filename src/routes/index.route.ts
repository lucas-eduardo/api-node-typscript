import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';

const indexRouter = () => {
    const extensions = ['.ts', '.js'];

    const route: express.Router = express.Router();
    fs
        .readdirSync(__dirname)
        .filter(file => (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (extensions.includes(file.slice(-3))))
        .forEach(file => {
            const fileRouter = require(path.join(__dirname, file));
            route.use(fileRouter['default']);
        });
    return route;
}

export default indexRouter();
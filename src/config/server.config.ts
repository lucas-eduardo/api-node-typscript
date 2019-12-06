import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as http from 'http';

export default (route: express.Router) => {
    const app: express.Application = express();
    const port: string | number = process.env.PORT || 3000;

    app
        .use(cors())
        .use(bodyParser.json({
            limit: '5mb'
        }))
        .use(bodyParser.urlencoded({
            extended: false
        }))
        .use(route);

    const server: http.Server = http.createServer(app);
    server.listen(port);
    server
        .on('listening', () => {
            console.log(`Aplicacao em execucao na porta ${port}`);
        })
        .on('error', (err) => {
            console.error('Ocorreu um erro', err);
        });
}
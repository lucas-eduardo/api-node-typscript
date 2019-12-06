import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import router from './routes/index.route';
import serverConfig from './config/server.config';

dotenv.config();

(async () => {
    try {
        
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Conexao feita com sucesso no mongo');
        serverConfig(router);
    } catch (error) {
        console.error('Ocorreu algum erro na conexao com o mongo', error);
    }
})();
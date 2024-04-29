import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import translate from './routes/translate.js'
import fixbug from './routes/fixbug.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/translate', translate);
app.use('/api/fixbug', fixbug);

const startServer = () => {
    try {
        app.listen(8080, () => {
            console.log('Server is running on port 8080');
        });
    }
    catch (err) {
        console.log(err);
    }
}

startServer();


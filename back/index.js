import { pkg } from 'body-parse';
import { express, urlencoded } from 'express';
import { router } from './routes/router.js';

const app = express();
const { json, urlencoded } = pkg;

app.use(json());
app.use(urlencoded({extended: true}));

app.listen(3000, function() {
    console.log('Listening from 3000')
});

app.use("/", router)
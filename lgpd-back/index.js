import { pkg } from 'body-parse';
import cors from 'cors';
import { express, urlencoded } from 'express';
import association from './models/Associations.js';
import { router } from './routes/router.js';
import sequelize from './utils/database.js';

const app = express();
const { json, urlencoded } = pkg;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/", router)
app.use(cors());

(async () => {
    try {
        association.associations()
        await sequelize.sync()

        app.listen(3000, function () {
            console.log('Listening from 3000')
        });
    } catch (error) {
        console.log(error)
    }
})()

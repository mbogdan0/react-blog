import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as mongoose from "mongoose";
import * as validator from 'express-validator';
import {corsMiddleware} from "./middlewares/cors";
import {errorsMiddleware} from "./middlewares/errors";
import {router} from "./modules/routes";
import {Config} from "./config";
import {__cleanUpImages, __seed} from "./help";
const path = require('path');


const port = process.env.PORT || 3002;
const app = express();

app.use(corsMiddleware);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./middlewares/helmet')(app);

app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));


app.use(validator());
app.use(router);
app.use(errorsMiddleware);


(<any>mongoose).Promise = Promise;


mongoose.connect(Config.mongoUri, {
    useNewUrlParser: true
}).then(() => {
    console.log('Mongo listening on ', Config.mongoUri);
    app.listen(port, function () {
        console.log('App listening on port ' + port);
        console.log('App running in ', process.env.NODE_ENV === 'production' ? 'prod' : 'dev', ' mode');
        __seed().catch(console.error);
        // TODO __cleanUpImages().catch(console.error);
    });
}).catch(err => {
    console.error(err);
    console.log('App running in ', process.env.NODE_ENV === 'production' ? 'prod' : 'dev', ' mode');
});

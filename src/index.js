/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import express from 'express';
import { urlencoded } from 'body-parser';
import routes from './routers';

const port = 3000;
const app = express();
app.set('trust proxy', true);
app.engine('.ejs', require('ejs').__express);

app.set('views', `${__dirname}/views/`);

app.use(urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/', routes);

app.listen(port, () => {
    console.log(`App listening at port http://localhost:${port}`);
});

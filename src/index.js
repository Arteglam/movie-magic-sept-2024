import express from 'express';
import 'dotenv/config';
import routes from './routes.js';
import handlebarsinit from './config/handlebarsinit.js';
import expressinit from './config/expressinit.js';
import mongooseinit from './config/mongooseinit.js';

const app = express();

mongooseinit();
handlebarsinit(app);
expressinit(app);

app.use(routes);

app.listen(5000, () => console.log(`Server is listening on http://localhost:5000...`));



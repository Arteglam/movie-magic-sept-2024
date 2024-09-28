import routes from './routes.js';
import handlebarsinit from './config/handlebarsinit.js';
import expressinit from './config/expressinit.js';

const app = express();
handlebarsinit(app);
expressinit(app);

app.use(routes);

app.listen(5000, () => console.log(`Server is listening on http://localhost:5000...`));



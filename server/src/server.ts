import express, { response } from 'express';
import routes from './routes';

const app = express();
// apply the use of JSON on request.body data
app.use(express.json());
app.use(routes)


app.listen(3000)
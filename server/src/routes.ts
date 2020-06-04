import express from "express";
import knex from './database/connection';
//importing a class that POST things from controllers
import PointsController from './controllers/PointsController'
import ItemsControllers from "./controllers/ItemsController";
//create a to call routes instead of app
const routes = express.Router();
//Instance the imported class
const pointsController = new PointsController();
const intemsController = new ItemsControllers();

routes.get('/items', intemsController.index );


routes.post('/points', pointsController.create );
routes.get('/points', pointsController.index );
routes.get('/points/:id', pointsController.show);

//exporting the const routes
export default routes;
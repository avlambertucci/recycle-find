import express from "express";
//create a to call routes instead of app
const routes = express.Router();

routes.get('/', (request, response)=>{
    return response.json({message:"something"})
});

//exporting the const routes
export default routes;
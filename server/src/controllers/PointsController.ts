
import {Request, Response} from 'express'
import knex from '../database/connection';
// when we use request and response in a class we have to import from express their types
class PointsController {

    async index(request:Request, response:Response){
        const {city,uf,items} = request.query
       
        const parsedItems = String(items)
            .split(',')
            .map(item=>Number(item.trim()))

        const points = await knex('points')
            .join('point_items_relationship', 'points.id', '=', 'point_items_relationship.point_id')
            .whereIn('point_items_relationship.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*')
        return response.json(points)
    }

    async show(request:Request, response: Response){
        const {id,} = request.params
        console.log(id)
        const point = await knex('points').where('id', id).first();

        if(!point){
            return response.status(400).json({message: 'point not found'})
        }

        const items = await knex('items')
        .join('point_items_relationship', 'items.id', '=', 'point_items_relationship.item_id',)
        .where('point_items_relationship.point_id', id)
        .select('items.title')
        return response.json({point, items})
    }

    async create(request:Request, response:Response){
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = request.body
    
        const trx = await knex.transaction();

        const point = {
            image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        }
    
        const insertedIds = await trx('points').insert(point);
    
        const point_id = insertedIds[0];
    
        const pointedItems = items.map((item_id: number) =>{
            return {
                item_id,
                point_id
            };
        });
    
       await trx('point_items_relationship').insert(pointedItems)

       await trx.commit();
       return response.json({
           id: point_id,
           ...point,
       })
        
    }

}

export default PointsController
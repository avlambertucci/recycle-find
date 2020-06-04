import Knex from "knex";

export async function up(knex: Knex){
//create table
    return knex.schema.createTable('point_items_relationship', table=>{
        table.increments('id').primary()
        //create and turns point_id into FK of points table
        table.integer('point_id').notNullable().references('id').inTable('points')
        //create and turns item_id into FK of items table
        table.integer('item_id').notNullable().references('id').inTable('items')
        
       
    })
}

export async function down(knex: Knex){
    knex.schema.dropTable('point_items_relationship')
//Cntrl+Z
}
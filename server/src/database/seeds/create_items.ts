import Knex from "knex";

export async function seed(knex: Knex){
    await knex('items').insert([
        {title: 'Lamps',image: 'lampadas.svg'},
        {title: 'Batteries',image: 'baterias.svg'},
        {title: 'Papers',image: 'papeis-papelao.svg'},
        {title: 'Electronic Residues',image: 'eletronicos.svg'},
        {title: 'Organic Residues',image: 'organicos.svg'},
        {title: 'Oil',image: 'oleo.svg'},
        
    ]);
    
}
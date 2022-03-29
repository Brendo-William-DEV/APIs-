'use strict'

/*
|--------------------------------------------------------------------------
| ProdutoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Produto = use('App/Models/Produto')

class ProdutoSeeder {
  async run () {
    await Produto.createMany([
      { nome:'banana' , minimo_estoque: 150, foto_produto: 'foto1.png'},
      { nome: 'maçã' , minimo_estoque: 150, foto_produto: 'foto2.png',},
      { nome: 'manga' , minimo_estoque: 150, foto_produto: 'foto3.png'},
    ])
  }
}

module.exports = ProdutoSeeder

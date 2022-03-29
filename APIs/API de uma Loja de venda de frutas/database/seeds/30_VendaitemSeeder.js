'use strict'

/*
|--------------------------------------------------------------------------
| VendaitemSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Vendaitem = use('App/Models/Vendaitem')

class VendaitemSeeder {
  async run () {
    await Vendaitem.createMany([
      {quantidade: 99 ,preco_atacado: 5, preco_unidade: 7, produto_id: 1, venda_id: 1 },
      { quantidade: 87 ,preco_atacado: 10, preco_unidade: 12, produto_id: 2, venda_id: 2},
      { quantidade: 77 ,preco_atacado: 12, preco_unidade: 15, produto_id: 3, venda_id: 3},
    ])
  }
}

module.exports = VendaitemSeeder

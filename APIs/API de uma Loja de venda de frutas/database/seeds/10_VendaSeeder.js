'use strict'

/*
|--------------------------------------------------------------------------
| VendaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Venda = use('App/Models/Venda')

class VendaSeeder {
  async run () {
    await Venda.createMany([
      {cliente: 'Jailsom Mendes', forma_de_pagamento: 'boleto', data_de_entrega: '2021-05-22' },
      {cliente: 'Paulo Guina', forma_de_pagamento: 'cartão', data_de_entrega: '2021-05-25'},
      {cliente: 'Latino da Silva ', forma_de_pagamento:'boleto', data_de_entrega: '2021-06-01'},
    ])

  }
}

module.exports = VendaSeeder

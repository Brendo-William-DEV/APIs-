'use strict'

/*
|--------------------------------------------------------------------------
| FornecedorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Fornecedor = use('App/Models/Fornecedor')

class FornecedorSeeder {
  async run () {
    await Fornecedor.createMany([
      {nome: 'Marcos Andrade Silva' ,telefone: '983463982', local: 'A onde judas perdeu as botas, lote 33' },
      { nome: 'Adriele dos Santos' ,telefone: '986415031', local: 'Acasa da mão joana, lote 22' },
      { nome: 'Mateus Santos Martins' ,telefone: '981415099', local: 'Setor de chacara, lote 34' },
    ])
  }
}

module.exports = FornecedorSeeder

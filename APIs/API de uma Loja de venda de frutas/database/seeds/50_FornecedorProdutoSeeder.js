'use strict'

/*
|--------------------------------------------------------------------------
| FornecedorProdutoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const FornecedorProduto = use('App/Models/FornecedorProduto')

class FornecedorProdutoSeeder {
  async run () {
    await FornecedorProduto.createMany([
      {estoque: 177 ,preco_custo: 2, produto_id: 1, fornecedor_id: 1 },
      { estoque: 160 ,preco_custo: 5, produto_id: 1, fornecedor_id: 2},
      { estoque: 200 ,preco_custo: 4, produto_id: 1, fornecedor_id: 3 },
    ])
  }
}

module.exports = FornecedorProdutoSeeder

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FornecedorProdutoSchema extends Schema {
  up () {
    this.create('fornecedor_produtos', (table) => {
      table.increments()
      table.timestamps()
      table.integer('fornecedor_id').references('id').inTable('fornecedors').unsigned().notNullable()
      table.integer('produto_id').references('id').inTable('produtos').unsigned().notNullable()
      table.int('estoque', 11).notNullable()
      table.int('preco_custo', 11).notNullable()
    })
  }

  down () {
    this.drop('fornecedor_produtos')
  }
}

module.exports = FornecedorProdutoSchema

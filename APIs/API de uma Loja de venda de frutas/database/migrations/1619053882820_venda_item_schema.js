'use strict'

const Schema = use('Schema')

class VendaItemSchema extends Schema {
  up () {
    this.create('venda_items', (table) => {
      table.increments()
      table.timestamps()
      table.integer('produto_id').references('id').inTable('produtos').unsigned().notNullable()
      table.integer('venda_id').references('id').inTable('vendas').unsigned().notNullable()
      table.integer('quantidade', 11).notNullable()
      table.float('preco_atacado').notNullable()
      table.float('preco_unidade').notNullable()

    })
  }

  down () {
    this.drop('venda_items')
  }
}

module.exports = VendaItemSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutosSchema extends Schema {
  up () {
    this.create('produtos', (table) => {
      table.increments()
      table.timestamps()
      table.string('nome', 45).notNullable()
      table.int('minimo_estoque', 11).notNullable()
      table.string('foto_produto').defaultTo('foto.png')
    })
  }

  down () {
    this.drop('produtos')
  }
}

module.exports = ProdutosSchema

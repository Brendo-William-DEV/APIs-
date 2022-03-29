'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FornecedorSchema extends Schema {
  up () {
    this.create('fornecedors', (table) => {
      table.increments()
      table.timestamps()
      table.string('nome', 45).notNullable()
      table.string('telefone', 15).notNullable()
      table.string('local', 45).notNullable()
    })
  }

  down () {
    this.drop('fornecedors')
  }
}

module.exports = FornecedorSchema

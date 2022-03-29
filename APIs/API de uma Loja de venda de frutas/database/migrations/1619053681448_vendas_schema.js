'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VendaSchema extends Schema {
  up () {
    this.create('vendas', (table) => {
      table.increments()
      table.timestamps()
      table.string('cliente', 100).notNullable()
      table.string('forma_de_pagamento', 100).notNullable()
      table.date('data_de_entrega')
    })
  }

  down () {
    this.drop('vendas')
  }
}

module.exports = VendaSchema

'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Venda extends Model {
    static getCamposCadastro(){
        return['cliente', 'forma_de_pagamento', 'data_de_entrega']
    }

    vendaitems(){
        return this.hasMany('App/Models/VendaItem')
    }

}

module.exports = Venda

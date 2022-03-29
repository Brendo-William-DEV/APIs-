'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Produto extends Model {
    static getCamposCadastro(){
        return['nome', 'minimo_estoque']
    }

    vendaitems(){
        return this.hasMany('App/Models/VendaItem')
    }
}

module.exports = Produto

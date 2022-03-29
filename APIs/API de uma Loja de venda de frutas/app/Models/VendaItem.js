'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class VendaItem extends Model {
    static getCamposCadastro(){
        return['venda_id', 'produto_id', 'quantidade', 'preco_atacado', 'preco_unidade']
    }

    venda(){
        return this.belongsTo('App/Models/Venda')
    }

    produto(){
        return this.belongsTo('App/Models/Produto')
    }

    
}

module.exports = VendaItem

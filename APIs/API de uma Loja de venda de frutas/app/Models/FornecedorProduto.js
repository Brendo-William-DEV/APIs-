'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FornecedorProduto extends Model {
    static getCamposCadastro(){
        return['fornecedor_id', 'produto_id', 'estoque', 'preco_custo']
    }

    produto(){
        return this.belongsTo('App/Models/Fornecedor')
    }
    fornecedor(){
        return this.belongsTo('App/Models/Venda')
    }

}


module.exports = FornecedorProduto

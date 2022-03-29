'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Fornecedor extends Model {
    static getCamposCadastro(){
        return['nome', 'telefone', 'local']
    }
    
    fornecedorProdutos(){
        return this.hasMany('App/Models/FornecedorProduto')
    }

}

module.exports = Fornecedor

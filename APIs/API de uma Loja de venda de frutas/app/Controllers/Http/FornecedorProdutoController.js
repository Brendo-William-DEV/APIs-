'use strict'

const FornecedorProduto = use('App/Models/FornecedorProduto')

class FornecedorProdutoController {


  async index ({ request, response, view ,params}) {
    return FornecedorProduto
    .query()
    .with('produto')
    .with('fornecedor')
    .fetch();
  }



  async store ({ request, response }) {
    const dados = request.only(['fornecedor_id', 'produto_id', 'estoque', 'preco_custo' ])
    return await FornecedorProduto.create(dados)
  }


  async show ({ params, request, response, view }) {
    return FornecedorProduto
    .query()
    .with('models')
    .where('id', params.id)
    .fiest();
  }



  async update ({ params, request, response }) {
    const fornecedorproduto = await FornecedorProduto.findOrFail(params.id)
    const dados = request.only(['fornecedor_id', 'produto_id', 'estoque', 'preco_custo'])
    fornecedorproduto.merge(dados)
    await fornecedorproduto.save()
    return fornecedorproduto
  }


  async destroy ({ params, request, response }) {
    const fornecedorproduto = await FornecedorProduto.findOrFail(params.id)
    return await fornecedorproduto.delete();
  }
}

module.exports = FornecedorProdutoController

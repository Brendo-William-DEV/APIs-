'use strict'

const Produto = use('App/Models/Produto')

class ProdutoController {


  async index ({ request, response, view ,params}) {
    return Produto
    .query()
    .with('vendaitems')
    .first();
  }


  async store ({ request, response }) {
    const dados = request.only(['nome', 'minimo_estoque', 'foto_produto'])
    return await Produto.create(dados)
  }


  async show ({ params, request, response, view }) {
    return Produto
    .query()
    .with('models')
    .where('id', params.id)
    .fiest();
  }

  
  async update ({ params, request, response }) {
    const produto = await Produto.findOrFail(params.id)
    const dados = request.only(['nome', 'minimo_estoque', 'foto_produto'])
    produto.merge(dados)
    await produto.save()
    return produto
  }


  async destroy ({ params, request, response }) {
    const produto = await Produto.findOrFail(params.id)
    return await produto.delete();
  }
}

module.exports = ProdutoController

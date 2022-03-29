'use strict'

const Fornecedor = use('App/Models/Fornecedor')


class FornecedorController {
 

  async index ({ request, response, view ,params}) {
    return Fornecedor
    .query()
    .with('fornecedorProdutos')
    .fetch();
  }



  async store ({ request, response }) {
    const dados = request.only(['nome', 'telefone', 'local'])
    return await Fornecedor.create(dados)
  }


  async show ({ params, request, response, view }) {
    return Fornecedor
    .query()
    .with('models')
    .where('id', params.id)
    .fiest();
  }



  async update ({ params, request, response }) {
    const fornecedor = await Fornecedor.findOrFail(params.id)
    const dados = request.only(['nome', 'telefone', 'local'])
    fornecedor.merge(dados)
    await fornecedor.save()
    return fornecedor
  }


  async destroy ({ params, request, response }) {
    const fornecedor = await Fornecedor.findOrFail(params.id)
    return await fornecedor.delete();
  }
}

module.exports = FornecedorController

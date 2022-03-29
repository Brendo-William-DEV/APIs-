'use strict'

const VendaItem = use('App/Models/VendaItem')

class VendaItemController {

  
  async index ({ request, response, view , params}) {
    return VendaItem
    .query()
    .with('venda')
    .with('produto')
    .fetch();
  }


  async store ({ request, response }) {
    const dados = request.only(['venda_id', 'produto_id', 'quantidade', 'preco_atacado', 'preco_unidade' ])
    return await VendaItem.create(dados)
  }


  async show ({ params, request, response, view }) {
    return VendaItem
    .query()
    .with('models')
    .where('id', params.id)
    .first();
  }

//alteração 
  async update ({ params, request, response }) {
    const vendaItem = await VendaItem.findOrFail(params.id)
    const dados = request.only(['venda_id', 'produto_id', 'quantidade', 'preco_atacado', 'preco_unidade' ])
    vendaItem.merge(dados)
    await vendaItem.save()
    return vendaItem
  }


  async destroy ({ params, request, response }) {
    const vendaItem = await VendaItem.findOrFail(params.id)
    return await vendaItem.delete();
  }
}

module.exports = VendaItemController

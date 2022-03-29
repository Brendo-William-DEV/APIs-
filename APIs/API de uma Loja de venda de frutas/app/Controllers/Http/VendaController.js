'use strict'

const Venda = use('App/Models/Venda')

class VendaController {


  async index ({ request, response, view ,params }) {
    const {id} = request.all()
    return Venda
    .query()
    .with('vendaitems')
    .fetch();
  }



  async store ({ request, response }) {
    const dados = request.only(['cliente', 'forma_de_pagamento', 'data_de_entrega'])
    return await Venda.create(dados)
  }


  async show ({ params, request, response, view }) {
    return Venda
    .query()
    .with('models')
    .where('id', params.id)
    .fiest();
  }



  async update ({ params, request, response }) {
    const venda = await Venda.findOrFail(params.id)
    const dados = request.only(['cliente', 'forma_de_pagamento', 'data_de_entrega'])
    venda.merge(dados)
    await venda.save()
    return venda
  }


  async destroy ({ params, request, response }) {
    const venda = await Venda.findOrFail(params.id)
    return await venda.delete();
  }
}

module.exports = VendaController

'use strict'
const Usuarios = use('App/Models/Usuario')
class UsuarioController {

  async index ({request}) {
    let {page, perPage} = request.all()
    return Usuarios.query().paginate(page, perPage)
  }
  async create ({}) {
  }

  async store ({ request, response }){
    const dados = request.only(['name', 'avatar', 'email', 'password'])
    return await Usuarios.create(dados)
  } 

  async show ({}) {
  }

  async edit ({}) {
  }

  async update ({}) {

    const Usario = await Usuario.findOrFail(params.id)

    const dados = request.only (['name', 'avatar', 'email', 'password'])
    

    Usuario.merge(dados)
    Usuario.save()
  }

  async destroy ({ params, request, response }) {
    const usuario = await Usuario.findOrFail(params.id)
    return await usuario.delete();
  }

}

module.exports = UsuarioController

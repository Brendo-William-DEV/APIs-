'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.resource('/fornecedor', 'FornecedorController').apiOnly()
Route.resource('/fornecedor_produtos', 'FornecedorProdutoController').apiOnly()
Route.resource('/produtos', 'ProdutoController').apiOnly()
Route.resource('/vendas', 'VendaController').apiOnly()
Route.resource('/venda_item', 'VendaItemController').apiOnly()


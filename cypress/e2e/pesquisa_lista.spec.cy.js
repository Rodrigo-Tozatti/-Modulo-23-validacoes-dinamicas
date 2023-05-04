
const dados_padrao = require('../fixtures/dados_padrao.json')

describe('template spec', () => {

  before(() => {
    cy.intercept({
      method: 'GET',
      url: 'wp-admin/admin-ajax*',
      query: {
        term: dados_padrao.produto
      }
    }, req => {
      req.reply(
        {
          statusCode: 200,
          body: `${req.query.callback}
          (${JSON.stringify(dados_padrao.resposta)})`
        }
      )
    })
  });

  beforeEach(() => {
    cy.visit('')
  });

  dados_padrao.produto.forEach(item => {
    it(`Produto ${item.label} deve retornar corretamente`, () => {
      cy.lupa()
      cy.preencher_pesquisa(item.label)
      cy.lista_produto().should('have.attr', 'title', item.label)
    });
  })
  
})
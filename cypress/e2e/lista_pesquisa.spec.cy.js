const dadosPadrao = require ('../fixtures/dados-padrao.json')
import { homePage } from "../support/pages/home.page"
import { selProdPage } from "../support/pages/selProd.page";


describe('Lista de pesquisa', () => {

  before(() => {
    cy.intercept({
      url: '/wp-admin/admin-ajax*',
      query: { term: "EBAC"}
    }), req => {
      req.reply({
        statusCode: 200,
        body: `${req.query.callback}(
          ${JSON.stringify(
            dadosPadrao.autocompleteSearchData
          )}
        )`
      })
    }
  });

  beforeEach(() => {
    cy.visit("")
  });

  dadosPadrao.autocompleteSearchData.forEach(item => {
    it('Produto deve estar correto', () => {
      homePage.pesquisaLupa()
      selProdPage.pesquisar(item.label)
      selProdPage.listaProdutos.first().should('have.attr', 'title', item.label)
      selProdPage.listaProdutos.each(el => {
        expect(el.attr('title')).eq(item.label)
      }) 
      cy.percySnapshot(`Screenshot ${item.label} details`);
    });
  })
})
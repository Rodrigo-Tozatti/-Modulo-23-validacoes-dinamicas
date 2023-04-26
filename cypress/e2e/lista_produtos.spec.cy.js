
import { produtoPage } from "../support/pages/produtos.pages";
import { detalhesProdutosPage } from '../support/pages/detalhesProdutos.pages';

describe('Lista de produtos', () => {

  beforeEach(() => {
    cy.visit('')
    cy.contains('a', 'view all').click()
  });


  it('Deve validar detalhes dos links dos produtos', () => {
    produtoPage.listaProduto.each(produto => {      //each --> premite fazer intereação com todos os itens da lista
      let linkProduto = produto.attr('href')
      let tituloProduto = produto.attr('title')
      

      cy.visit(linkProduto).then(() => {
        detalhesProdutosPage.breadcrumb.should('include.text', tituloProduto)
        detalhesProdutosPage.tituloProduto.invoke('text').then(text => {   // invoke --> capturar o texto do elemento
          expect(text).to.be.equal(tituloProduto)
        })
        detalhesProdutosPage.variacoesProduto.find('[for]')
          .should('have.length', 2) // have.length --> verificar se tem a quantidade de objetos descrito nessa caso 2
          .and('be.visible')
      })
      cy.percySnapshot(`Screenshot ${tituloProduto} details`);
    })   
  })
})


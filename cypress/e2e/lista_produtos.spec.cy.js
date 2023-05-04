
describe('Validações dinâmicas', () => {

  beforeEach(() => {
    cy.visit('')
    cy.contains('a', 'view all').click()
  });


  it('Lista de produtos', () => {

    cy.listaProdutos().each(produto => {    //each permite fazer interações com todos os itens da lista
      let linkProduto = produto.attr('href')  //attr é o atributo do produto ex: herf é o link
      let nomeProduto = produto.attr('title')

      cy.visit(linkProduto).then(() => {
        cy.barrahoNavegacao().should('include.text', nomeProduto) //include text --> para validar o texto esperado, nesse caso validar a variavel nome do produto
        cy.variacoes().find('[for]').should('have.length', 2).and('be.visible')
       
      })
    })
  })
})
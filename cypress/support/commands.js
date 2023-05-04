
// Pesquisando a lista de produtos
Cypress.Commands.add('listaProdutos', () => {
    cy.get('a.product-image')
})

// dentro do produto
Cypress.Commands.add('barrahoNavegacao', () => {
    cy.get('.tbay-woocommerce-breadcrumb')
})

Cypress.Commands.add('variacoes', () => {
    cy.get('table.variations')
})

// --------------------------------------------------------------------------------------------------

// Pesquisa na lupa
Cypress.Commands.add('lupa', () => {
    cy.xpath(`//*[@id="tbay-header"]/div/div/div/div[2]/div/div[4]`).click()
})

// Preencher pesquisa lupa 
Cypress.Commands.add('preencher_pesquisa', (produto) => {
    cy.get('#tbay-header .tbay-search').type(produto)
})

// lista de produtos da lupa
Cypress.Commands.add('lista_produto', () => {
    cy.get('#ui-id-1')
})
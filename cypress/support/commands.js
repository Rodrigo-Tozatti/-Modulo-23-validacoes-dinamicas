
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
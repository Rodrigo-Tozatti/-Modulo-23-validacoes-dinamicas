
export const detalhesProdutosPage = {
    get breadcrumb() { return cy.get('.breadcrumb > li:last-child')},
    get tituloProduto() { return cy.get('h1.product_title.entry-title')},
    get variacoesProduto() { return cy.get('.variations')}
}
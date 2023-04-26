
export const selProdPage = {
    get preencher() { return cy.get('#tbay-header .tbay-search')},
    get listaProdutos() { return cy.get(`.ui-menu-item:not([class^="list-header"]) >a`)},
    pesquisar(produto) {
        this.preencher.type(produto)
    }
}




/*class SelProdPage {
    
    selProd() {
        cy.get('#tbay-header .tbay-search').type('jack')
    }
}
export default new SelProdPage()*/

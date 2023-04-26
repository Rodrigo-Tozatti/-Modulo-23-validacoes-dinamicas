
export const homePage = {
    get lupa() { return cy.get('.site-header .search-form > button') },
    pesquisaLupa() {this.lupa.click()}
}
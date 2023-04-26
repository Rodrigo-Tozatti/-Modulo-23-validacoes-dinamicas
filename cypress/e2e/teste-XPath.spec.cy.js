describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/')
    cy.xpath(`//*[@id="tbay-header"]/div/div/div/div[2]/div/div[4]`).click()
    //cy.get('#tbay-header > div > div > div > div.pull-right.hidden-sm.hidden-xs > div > div:nth-child(4)').click()
    
  })
})




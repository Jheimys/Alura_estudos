describe('Página de login', () => {
    before(() => {
        cy.visit("http://localhost:4200/#/home")
    })
    it('Preencher os campos de login corretamante para fazer login', () => {
        cy.login('catarinap', 'catarina123')
    })
})
describe('Página de login', () => {
    it('Verificar mensagens de campos obrigatórios', () => {
        cy.visit("http://localhost:4200/#/home")
        cy.get('small').contains('User name is required!')
        cy.get('small').contains('Password is required!')
    })
})
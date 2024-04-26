describe('Página de login', () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200/#/home")
        cy.intercept('POST', 'http://localhost:3000/user/login',{
            statusCode: 400
        }).as('stubPost')
    })

    it('Verificar mensagens de campos obrigatórios', () => {
        cy.get('small').contains('User name is required!')
        cy.get('small').contains('Password is required!')
    })

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
        cy.login('carowl', '12345678')
        cy.wait('@stubPost')
    })
})
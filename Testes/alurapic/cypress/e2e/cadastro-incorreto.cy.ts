describe('página de cadastro', () => {
    it('Preencher os campos do formulário de forma incorreta', () => {
        cy.visit("http://localhost:4200/#/home")
        cy.contains('a', 'Register').click()
        cy.contains('button', 'Register').click()
        cy.contains('button', 'Register').click()
        cy.get('small').contains('Email is required!')
        cy.get('small').contains('Full name is required!')
        cy.get('small').contains('User name is required!')
        cy.get('small').contains('Password is required!')
    })
})

//---------------------  Outra forma -----------------------------------

// describe('Página de cadastro', () => {
//     it('Preencher os campos do formulário de forma incorreta', () => {
//       cy.visit('http://localhost:4200/#/home');
//       cy.contains('a', 'Register now').click();
//       cy.contains('button', 'Register').click();
//       cy.contains('button', 'Register').click();
//       cy.contains('Email is required!').should('be.visible');
//       cy.contains('Full name is required!').should('be.visible');
//       cy.contains('User name is required!').should('be.visible');
//       cy.contains('Password is required!').should('be.visible');
//     });
// });
  
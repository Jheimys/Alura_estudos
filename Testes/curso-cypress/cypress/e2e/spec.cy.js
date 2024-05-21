describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click()

    cy.get('[data-test="input-name"]').type('Rodolfo')
    cy.get('[data-test="input-email"]').type('rodolfo@email.com')
    cy.get('[data-test="input-password"]').type('Rodo123456')
    cy.get('[data-test="input-confirm-password"]').type('Rodo123456')  

    cy.get('[data-test="submit-button"]').click()

  })
})

//------- OUTRA FORMA DE ESCREVER O CÓDIGO ACIMA ----------------------

// describe('template spec', () => {
//   it('passes', () => {
//       cy.visit('https://adopet-frontend-cypress.vercel.app/');
//       cy.contains('a', 'Cadastrar').click();
//       cy.get('input[name="nome"]').type('Ana de Jesus');
//       cy.get('input[name="email"]').type('ana@email.com');
//       cy.get('input[name="password"]').type('Senha123');
//       cy.get('input[name="confirm_password"]').type('Senha123');
//       cy.contains('button', 'Cadastrar').click();
//    })
// })
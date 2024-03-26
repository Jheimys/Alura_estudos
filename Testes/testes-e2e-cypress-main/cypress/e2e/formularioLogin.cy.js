describe('Formulário de Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Não devemos permitir email inválido', () => {
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('neiton@alura');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-erro')
      .should('exist')
      .and('have.text', 'O email digitado é inválido');
  });

  it('Não deve permitir um campo em branco', () => {
    cy.getByData('botao-login').click();
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-erro')
      .should('exist')
      .and('have.text', 'O campo email é obrigatório');
  });
});

describe("Página de cadastro", () => {
  it("Preencher o formulário corretamente para cadastrar um usuário", () => {
    cy.visit("http://localhost:4200/#/home");
    cy.contains('a', 'Register now').click()
    cy.get('[formcontrolname="email"]').type('carolina@email.com.br')
    cy.get('[formcontrolname="fullName"]').type('Catarina Pessoa')
    cy.get('[formcontrolname="userName"]').type('catarinap')
    cy.get('[formcontrolname="password"]').type('catarina123')
    cy.get('[data-test="btnRegister"]').click()
  });
});

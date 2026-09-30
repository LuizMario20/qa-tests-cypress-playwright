describe('Teste de Login', () => {
    it('deve realizar login com sucesso', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test="username"]')
            .type('standard_user');

        cy.get('[data-test="password"]')
            .type('secret_sauce');

        cy.get('[data-test="login-button"]')
            .click();

        cy.url()
            .should('include', '/inventory.html');

    });


    it('deve impedir login com senha incorreta', () => {

        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test="username"]')
            .type('standard_user');

        cy.get('[data-test="password"]')
            .type('senha_errada');

        cy.get('[data-test="login-button"]')
            .click();

        cy.get('[data-test="error"]')
            .should('be.visible');

    });

});

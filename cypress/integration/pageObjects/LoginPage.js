class LoginPage
{
    getEmail()
    {
        return cy.get('form#login-form div#emailRow input#email')
    }
    getPassword()
    {
        return cy.get('div#passwordRow input#password')
    }
    getLoginButton()
    {
        return cy.get('form#login-form div.ti-row button#btn-login')
    }


}

export default LoginPage;
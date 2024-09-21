const { expect } = require ('@playwright/test');

exports.loginPage= class loginPage
{
    constructor(page)
    {
        this.page=page;
        this.usernameInput='//*[@id="email"]';
        this.passwordInput='//*[@id="password"]';
        this.loginButton='//button[@id="submit"]';
        this.loginValidation='//p[text()="Click on any contact to view the Contact Details"]';
        this.invalidLogin='//span[text()="Incorrect username or password"]';
    }

    async login(username,password)
    {
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();  
    }
    async verifyValidLogin()
    {
        await expect(this.page.locator(this.loginValidation)).toBeVisible();
    }
    async verifyInvalidLogin()
    {
        await expect(this.page.locator(this.invalidLogin)).toBeVisible();
    }
}

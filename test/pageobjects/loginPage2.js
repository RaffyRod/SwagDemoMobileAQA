exports.LoginPage = class LoginPage {
    async enterUsername(username) {
        const usernameField = await $('//android.widget.EditText[@content-desc="test-Username"]');
        await usernameField.setValue(username);
        return this; // Permite method chaining
    }

    async enterPassword(password) {
        const passwordField = await $('//android.widget.EditText[@content-desc="test-Password"]');
        await passwordField.setValue(password);
        return this; // Permite method chaining
    }

    async clickLoginButton() {
        const loginButton = await $('//android.widget.ViewGroup[@content-desc="test-LOGIN"]');
        await loginButton.click();
    }

    async loginProcess(user, pass) {
        await this.enterUsername(user);
        await this.enterPassword(pass);
        await this.clickLoginButton();
    }

    async verifyLoginPageDisplayed() {
        const usernameField = await $('//android.widget.EditText[@content-desc="test-Username"]');
        await expect(usernameField).toBeDisplayed();
    }
};

exports.LoginPage = class LoginPage {
    // Element getters
    get usernameField() {
      return $('~test-Username'); // Selector por accessibility id
  }

  get passwordField() {
      return $('~test-Password'); // Selector por accessibility id
  }

  get loginButton() {
      return $('~test-LOGIN'); // Selector por accessibility id
  }

    async loginProcess(user, pass) {
      console.log('Performing login process');
      await this.usernameField.waitForDisplayed({ timeout: 10000 });
      await this.usernameField.click();
      await this.usernameField.clearValue();
      await this.usernameField.setValue(user);

      // Handle password field
      await this.passwordField.waitForDisplayed({ timeout: 5000 });
      await this.passwordField.click();
      await this.passwordField.clearValue();
      await this.passwordField.setValue(pass);

      // Verify username only - password will be masked
      const usernameText = await this.usernameField.getText();
      expect(usernameText).toBe(user);

      // Submit the form
      await this.loginButton.click();
    }
  };
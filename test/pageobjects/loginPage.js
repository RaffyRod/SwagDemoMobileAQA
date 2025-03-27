exports.LoginPage = class LoginPage {
    // Usamos getters para los elementos
    get usernameField() { 
        return $('//android.widget.EditText[@content-desc="test-Username"]'); 
    }
    
    get passwordField() { 
        return $('//android.widget.EditText[@content-desc="test-Password"]'); 
    }
    
    get loginButton() { 
        return $('//android.view.ViewGroup[@content-desc="test-LOGIN"]'); 
    }

    async loginProcess(user, pass) {
        // Esperar y escribir en username
        await this.usernameField.waitForDisplayed({ timeout: 10000 });
        await this.usernameField.click(); // Enfocar el campo
        await this.usernameField.setValue(user);
        
        // Esperar y escribir en password
        await this.passwordField.waitForDisplayed({ timeout: 5000 });
        await this.passwordField.setValue(pass);
        
        // Verificación adicional (opcional)
        await expect(this.usernameField).toHaveValue(user);
        await expect(this.passwordField).toHaveValue(pass);
    }
};
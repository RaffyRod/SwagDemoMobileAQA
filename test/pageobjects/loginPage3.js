exports.LoginPage = class LoginPage {
    constructor() {
        // Definimos los selectores como propiedades de la clase
        this.userNameInput = '//android.widget.EditText[@content-desc="test-Username"]';
        this.userPasswordInput = '//android.widget.EditText[@content-desc="test-Password"]';
        this.loginBtn = '//android.view.ViewGroup[@content-desc="test-LOGIN"]';
    }

    async loginProcess(user, pass) {
        // 1. Localizar los elementos primero
        const usernameField = await $(this.userNameInput);
        const passwordField = await $(this.userPasswordInput);
        
        // 2. Esperar a que sean interactuables
        await usernameField.waitForDisplayed({ timeout: 5000 });
        await passwordField.waitForDisplayed({ timeout: 5000 });
        
        // 3. Introducir los valores
        await usernameField.setValue(user);
        await passwordField.setValue(pass);
        
        // 4. Opcional: Verificar que los valores se establecieron
        await expect(usernameField).toHaveValue(user);
    }
};
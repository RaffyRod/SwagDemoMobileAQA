//import { LoginPage } from '../pageobjects/loginPage.js';
const { LoginPage } = require('../pageobjects/loginPage.js');

describe('Tests', () => {
	it('login', async () => {
		const loginPage = new LoginPage();
		await loginPage.loginProcess('standard_user', 'secret_sauce');
	});

});


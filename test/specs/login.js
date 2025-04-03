//import { LoginPage } from '../pageobjects/loginPage.js';
const { LoginPage } = require('../pageobjects/loginPage.js');
const { ProductPage } = require('../pageobjects/productPage.js');

describe('Tests', () => {
	it('login', async () => {
		const loginPage = new LoginPage();
		const productPage = new ProductPage();
		await loginPage.loginProcess('standard_user', 'secret_sauce');
		await productPage.verifyProductHeader();
	});

});


const { LoginPage } = require('../pageobjects/loginPage.js');
const { ProductPage } = require('../pageobjects/productPage.js');
const data = require('../../utils/testData/testdata.json');

describe('Login Page Tests', () => {
	it('[TC-001]: Login Flow', async () => {
		const loginPage = new LoginPage();
		const productPage = new ProductPage();
		await loginPage.loginProcess(data.standardUser, data.standardUserPass);
		await productPage.verifyProductHeader();
	});

});


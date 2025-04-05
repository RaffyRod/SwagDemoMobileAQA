const { LoginPage } = require('../pageobjects/loginPage.js');
const { ProductPage } = require('../pageobjects/productPage.js');
const data = require('../../utils/testData/testdata.json');

describe('Tests', () => {
	it('[TC-002] Change Products View', async () => {
		const loginPage = new LoginPage();
		const productPage = new ProductPage();
		await loginPage.loginProcess(data.standardUser, data.standardUserPass);
		await productPage.verifyProductHeader();
        await productPage.changeListViews();
	});

});


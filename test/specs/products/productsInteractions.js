const { LoginPage } = require('../../../pageobjects/loginPage.js');
const { ProductPage } = require('../../../pageobjects/productPage.js');
const { CommonPage } = require('../../../pageobjects/commonPage.js');
const data = require('../../../../utils/testData/testdata.json');

describe('Products Page Tests', () => {
	it('[TC-002] Change Products View', async () => {
		const loginPage = new LoginPage();
		const productPage = new ProductPage();
		const commonPage = new CommonPage();
		await loginPage.loginProcess(data.standardUser, data.standardUserPass);
		await productPage.verifyProductHeader();
        await productPage.changeListViews();
		await commonPage.logOut();
		//await browser.relaunchActiveApp()
	});

});


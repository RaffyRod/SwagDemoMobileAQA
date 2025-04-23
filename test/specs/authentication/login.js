import LoginPage from '../../pageobjects/loginPage';
import ProductPage from '../../pageobjects/productPage';
import CommonPage from '../../pageobjects/commonPage';
import data from '../../../utils/testData/testdata.json';

describe('Login Page Tests', () => {
	it('[TC-001]: Login Flow', async () => {
		const loginPage = new LoginPage();
		const productPage = new ProductPage();
		const commonPage = new CommonPage();
		await loginPage.loginProcess(data.standardUser, data.standardUserPass);
		await productPage.verifyProductHeader();
		await commonPage.logOut();
		//await browser.relaunchActiveApp()
	});

});


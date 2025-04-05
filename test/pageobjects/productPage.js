const data = require('../../utils/testData/testdata.json');

exports.ProductPage = class ProductPage {

    // Locators
    get productHeader() {
      return $('//android.widget.TextView[@text="PRODUCTS"]');
    }

    get changeViewBtn(){
      return $('//android.view.ViewGroup[@content-desc="test-Toggle"]/android.widget.ImageView');
    }

    //Methods

    async verifyProductHeader() {
        console.log('Verifying Products Page header');
        await expect(this.productHeader).toExist({ timeout: 10000 });
        await expect(this.productHeader).toHaveText(data.productsPageHeader);
    }

    async clickOnViewBtn(){
      await expect(this.changeViewBtn).toExist({ timeout: 10000 });
      await this.changeViewBtn.click();
    }
  };
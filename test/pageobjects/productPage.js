const data = require('../../utils/testData/testdata.json');

exports.ProductPage = class ProductPage {

    get productHeader() {
      return $('//android.widget.TextView[@text="PRODUCTS"]');
    }

    async verifyProductHeader() {
        console.log('Verifying Products Page header');
        await expect(this.productHeader).toExist({ timeout: 10000 });
        await expect(this.productHeader).toHaveText(data.productsPageHeader);
    }
  };
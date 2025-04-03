exports.ProductPage = class ProductPage {

    get productHeader() {
      return $('//android.widget.TextView[@text="PRODUCTS"]');
    }

    async verifyProductHeader() {
        await expect(this.productHeader).toExist({ timeout: 10000 });
        await expect(this.productHeader).toHaveText('PRODUCTS');
    }
  };
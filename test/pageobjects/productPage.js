const data = require('../../utils/testData/testdata.json');

exports.ProductPage = class ProductPage {

    // Locators
    get productHeader() {
      return $('//android.widget.TextView[@text="PRODUCTS"]');
    }

    get changeViewBtn(){
      return $('//android.view.ViewGroup[@content-desc="test-Toggle"]/android.widget.ImageView');
    }

    get addListViewItemsBtn(){
      return $('(//android.widget.TextView[@text="+"])');
    }

    get addRegularViewItemsBtn(){
      return $('//android.view.ViewGroup[@content-desc="test-ADD TO CART"]');
    }

    //Methods

    async verifyProductHeader() {
        console.log('Verifying Products Page header');
        await expect(this.productHeader).toExist({ timeout: 10000 });
        await expect(this.productHeader).toHaveText(data.productsPageHeader);
    }

    async clickOnViewBtn(){
      console.log("Clicking on change view btn")
      await expect(this.changeViewBtn).toExist({ timeout: 10000 });
      await this.changeViewBtn.click();
    }

    async changeListViews(){
      console.log('Changing to List View')
      this.clickOnViewBtn();
      await expect(this.addListViewItemsBtn).toExist({ timeout: 2000 });
      this.clickOnViewBtn();
      console.log('Changing to Regular View')
      await expect(this.addRegularViewItemsBtn).toExist({ timeout: 2000 });
    }
  };
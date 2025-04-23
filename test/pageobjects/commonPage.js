export default class CommonPage {
    // Element getters
    get mobileMenu() {
      return $('//android.view.ViewGroup[@content-desc="test-Menu"]/android.view.ViewGroup/android.widget.ImageView');
  }

  get logOutOption(){
    return $('~test-LOGOUT');
  }

    async openMobileMenu() {
      console.log('Login out...');
      await this.mobileMenu.waitForDisplayed({ timeout: 10000 });
      await this.mobileMenu.click();
    }

    async logOut(){
     console.log('Login out...');
     await  this.openMobileMenu();
     await this.logOutOption.waitForDisplayed({ timeout: 10000 });
     await this.logOutOption.click();
    }
  };
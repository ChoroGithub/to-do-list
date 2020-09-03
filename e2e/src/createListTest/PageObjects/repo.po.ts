import { browser, by, element, protractor } from 'protractor';

export class Repo {
  locators = {
    addNewListButton: element(by.id('addNewList')),
    header: element(by.id('nameOfTheList')),
    newProductListName: element(by.id('newProductListName')),
    labelNameOfTheProduct: element(by.id('nameOfTheProduct')),
    newProductName: element(by.id('newProductName')),
    newNumberOfProducts: element(by.id('newNumberOfProducts')),
    addNewProductButton: element(by.id('addNewProduct')),
    saveListButton: element(by.id('saveListButton')),
    productListName: element(by.id('productListName')),
    parentTomaten: element(by.xpath("//*[text() =' Tomaten ']")).element(by.xpath('//*[@class ="inactive"]')),
    parentSpaghetti: element(by.xpath("//*[text() =' Spaghetti ']")).element(by.xpath('//*[@class ="inactive"]')),
  }

  navigateTo() {
    return browser.get('http://localhost:4200/home')
  }

  async testAddNewListButton() {
    await this.locators.addNewListButton.click();
    await expect(await this.getHeader()).toEqual('Name of the list');
  }

  async getHeader() {
    return await this.locators.header.getText();
  }

  async addNewListName() {
    //browser.waitForAngularEnabled(false);
    browser.sleep(2000);
    await this.locators.newProductListName.sendKeys('Spaghetti Bolognese');
    //browser.waitForAngularEnabled(true);
  }

  async testAddNewProductButton() {
    await expect(await this.getLabel()).toEqual('Name of the Product Count Add');

    await this.locators.newProductName.sendKeys('Tomaten');
    await this.locators.newNumberOfProducts.sendKeys('3');
    await this.locators.addNewProductButton.click();

    await this.locators.newProductName.sendKeys('Spaghetti');
    await this.locators.newNumberOfProducts.sendKeys('1');
    await this.locators.addNewProductButton.click();
  }

  async getLabel() {
    return await this.locators.labelNameOfTheProduct.getText();
  }

  async testSaveListButton() {
    await this.locators.saveListButton.click();
    await expect(await this.getProductListName()).toBe('Shopping list name: Spaghetti Bolognese');
  }

  async getProductListName() {
    return await this.locators.productListName.getText();
  }

  async changeStatusAfterSavingFirstProduct(productName) {
    let productElement = await this.getFirstProductElement(productName);
    await productElement.click();
    await expect(await this.locators.parentTomaten.getAttribute('class')).toBe('inactive');
  }

  async getFirstProductElement(productName: string) {
    return await element(by.xpath("//*[text() =' Tomaten ']"));
  }

  async changeStatusAfterSavingSecondProduct(productName) {
    let productElement = await this.getSecondProductElement(productName);
    await productElement.click();
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.alertIsPresent(), 5000, "Alert is not getting present :(");
    browser.switchTo().alert().accept()
    await expect(await this.locators.parentSpaghetti.getAttribute('class')).toBe('inactive');
    await productElement.click();
    browser.sleep(3000);
  }

  async getSecondProductElement(productName: string) {
    return await element(by.xpath("//*[text() =' Spaghetti ']"));
  }
}

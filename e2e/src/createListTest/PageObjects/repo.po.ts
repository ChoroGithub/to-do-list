import { browser, by, element, protractor } from 'protractor';

export class Repo {
  locators = {
    addNewListButton: element(by.buttonText('Add new list')),
    header: element(by.id('nameOfTheList')),
    newProductListName: element(by.id('newProductListName')),
    labelNameOfTheProduct: element(by.id('nameOfTheProduct')),
    newProductName: element(by.id('newProductName')),
    newNumberOfProducts: element(by.id('newNumberOfProducts')),
    addNewProductButton: element(by.id('addNewProduct')),
    saveListButton: element(by.id('saveListButton')),
    productListName: element(by.id('productListName')),
  }

  navigateTo() {
    return browser.get('/')
  }

  async testAddNewListButton() {
    await this.locators.addNewListButton.click();
    await expect(await this.getHeader()).toBe('Name of the list');

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
    await expect(await this.getLabel()).toBe('Name of the Product Count Add');

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


    browser.sleep(10000);
  }

  async getProductListName() {
    return await this.locators.productListName.getText();
  }







}

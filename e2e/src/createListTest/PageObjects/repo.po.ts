import { browser, by, element, protractor } from 'protractor';

export class Repo {

  locators = {

    addNewListButton: element(by.id('addNewList')),
    header: element(by.id('NameOfTheList'))

  }

  async testaddNewListButton() {

    let activeButton = await (this.locators.addNewListButton).isEnabled();

    console.log(activeButton);





    await this.locators.addNewListButton.click();
    console.log('after click');





  }

  async getHeader() {
    return await this.locators.header.getText();
  }
}

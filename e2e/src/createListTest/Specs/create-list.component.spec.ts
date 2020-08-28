import { Repo } from '../PageObjects/repo.po';
import { browser } from 'protractor';

describe('CreateListComponent', () => {
  let repoPage: Repo;

  beforeEach(() => { //Jasmine "Init" Klasse, diese wird jedes mal ausgeführt, bevor ein 'it' ausgeführt wird
    repoPage = new Repo(); //Erstellung neuer Instanz der der Page Object Klasse AppPage
  });

  it('should create', async () => {

    repoPage.navigateTo();
    await expect(repoPage.testAddNewListButton());
    //await browser.sleep(1000);
    await repoPage.addNewListName();

    await expect(repoPage.testAddNewProductButton());

    await expect(repoPage.testSaveListButton());



    
  });
});

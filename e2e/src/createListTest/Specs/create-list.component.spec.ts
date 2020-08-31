import { Repo } from '../PageObjects/repo.po';
import { browser } from 'protractor';

describe('CreateListComponent', () => {
  let repoPage: Repo;

  beforeEach(() => { //Jasmine "Init" Klasse, diese wird jedes mal ausgeführt, bevor ein 'it' ausgeführt wird
    repoPage = new Repo(); //Erstellung neuer Instanz der der Page Object Klasse AppPage
  });

  it('should create', async () => {
    repoPage.navigateTo();
    await repoPage.testAddNewListButton();
    await repoPage.addNewListName();
    await repoPage.testAddNewProductButton();
    await repoPage.testSaveListButton();
    await repoPage.changeStatusAfterSavingFirstProduct('Tomaten');
    await repoPage.changeStatusAfterSavingSecondProduct('Spaghetti');
  });
});
